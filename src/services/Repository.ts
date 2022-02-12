import express from 'express';
import queue from '../utils/rabbitMQ/RabbitMq';
import amqplib from 'amqplib';

const server = express();
server.use(express.json());

interface Datas {
    avatar_url: string
    url: string
    location: string
    followers_url: string
    following_url: string
    repos_url: string
}

queue.consume('Jardielson-s', (message: amqplib.Message) => {
    console.log(JSON.parse(message.content.toString()))
    const data: Datas = JSON.parse(message.content.toString());
    const { avatar_url, url, location, followers_url, following_url, repos_url} = data;
    //queue.sendToQueue('response', )
})

const port = 4000;
server.listen(process.env.PORT_REPOSITORY || port, () => {
    console.log(`Server of Error runing in Port ${process.env.PORT_REPOSITORY || port}`);
});