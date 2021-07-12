module.exports = {
    name: 'ping',
    description: 'This is a ping commmand!',
    execute(message, args){
        if(message.member.roles.cache.has('849076327058374717')){
        message.channel.send('pong!');
        }//if
    }
}