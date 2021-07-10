module.exports = {
    name: 'ping',
    description: 'This is a ping commmand!',
    execute(message, args){
        message.channel.send('pong!');
    }
}