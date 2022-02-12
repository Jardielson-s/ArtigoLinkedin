import express from 'express';
import amqplib from 'amqplib';
import queue from '../utils/rabbitMQ/RabbitMq';
import User from '../models/User';

const server = express();

interface Datas {
    user: string
    message: string
}

queue.consume('errorProcess',async  (message: amqplib.Message) => {
    //console.log(JSON.parse(message.content.toString()))
    const data: Datas = JSON.parse(message.content.toString());
    if(data){
        await User.create({
            key: data.user,
            request: data.message
        });
    }
});


const port = 5000;
server.listen(process.env.PORT_ERROR || port, () => {
    console.log(`Server of Error runing in Port ${process.env.PORT_ERROR || port}`);
});