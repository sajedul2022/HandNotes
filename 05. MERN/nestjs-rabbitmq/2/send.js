const amqp = require('amqplib');

async function send() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'hello';
        const message = 'Hello World!';
        await channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(message));
        console.log(" [x] Sent %s", message);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error(error);
    }
}

send();