const amqp = require('amqplib');

async function receive() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'hello';
        await channel.assertQueue(queue, {
            durable: false
        });
        
        channel.consume(queue, (msg) => {
            if (msg !== null) {
                console.log(" [x] Received %s", msg.content.toString());
                channel.ack(msg);
            }
        }, {
            noAck: true
        });
    } catch (error) {
        console.error(error);
    }
}

receive();