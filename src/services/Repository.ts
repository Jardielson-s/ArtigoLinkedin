import express from 'express';
import queue from '../utils/rabbitMQ/RabbitMq';
import amqplib from 'amqplib';
import User from '../models/User';

const server = express();
server.use(express.json());

interface Datas {
    login: string
    avatar_url: string
    url: string
    location: string
    followers_url: string
    following_url: string
    repos_url: string
    key: string,
    message: string
}

queue.consume('filaProcess', async (message: amqplib.Message) => {
    //console.log(JSON.parse(message.content.toString()))
    const data: Datas = JSON.parse(message.content.toString());
        
    if(data){
        const findUser = await User.findOne({ key: data.login });
        if(!findUser){
            await User.create({
                key: data.login || data.message,
                request: data
            });
        }else{
            await User.findOneAndUpdate({
                key: data.login,
            },{
                request: data
            });
        }
    }
})

const port = 4000;
server.listen(process.env.PORT_REPOSITORY || port, () => {
    console.log(`Server of Repository runing in Port ${process.env.PORT_REPOSITORY || port}`);
});