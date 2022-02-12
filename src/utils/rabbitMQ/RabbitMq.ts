import amqplib, { Channel, Connection } from 'amqplib';


class RabbitMQ{
    private async connect(){
        const conn = await amqplib.connect("amqp://user:user@localhost:5672");
        return await conn.createChannel();
     
    };
    constructor(){
        this.connect();
    }

    private async createQueue(channel: Channel , queue: string): Promise<Channel>{
        return new Promise((resolve, reject) => {
            try{
                channel.assertQueue(queue, { durable: true});
                resolve(channel);
            }catch(err){
                reject(err);
            }
        })
    }
    async sendToQueue(queue: string, message: Object){
        this.connect()
        .then(channel => this.createQueue(channel, queue))
        .then((channel) => {channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))})
        .catch(err => console.log(err)); 
    }
    async consume(queue: string, callback: any){
        this.connect()
              .then((channel) => this.createQueue(channel, queue))
              .then((channel) => {channel.consume(queue, callback, { noAck: true } ) })
              .catch(err => console.log(err));
          }
}
const queue = new RabbitMQ();

export default queue;