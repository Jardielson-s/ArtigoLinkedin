import axios from "axios";
import queue  from "../utils/rabbitMQ/RabbitMq";
const api = axios.create({
        baseURL: "https://api.github.com/users",
    });

const search = async (user: string) => {
    try{
    queue.sendToQueue(user, { message: 'Your response will be processed'})
    const response = await api.get(`/${user}`);
    queue.sendToQueue(user, response.data);
    }catch(err){
        //console.log(err);
        queue.sendToQueue(user, { message: 'Request failed with status code 404'});
    }
}

export default search;