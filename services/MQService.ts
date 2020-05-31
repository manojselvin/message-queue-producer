import amqp from 'amqplib';
import { CONN_URL } from '../config';
let channel: any = null;

amqp.connect(CONN_URL).then((conn: any) => {
   conn.createChannel().then((ch: any) => {
      channel = ch;
   });
});

export const publishToQueue = async (queueName: any, data: any) => {
   channel.sendToQueue(queueName, new Buffer(data));
}

process.on('exit', (code) => {
   channel.close();
   console.log(`Closing rabbitmq channel`);
});

