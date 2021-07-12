module.exports = {
    name: 'ping',
    description: 'This is a ping commmand!',
    execute(message, args){
        if(message.member.roles.cache.has('849076327058374717')){
        message.channel.send(`:ping_pong: Pong!`);
        }//if
        else{
            message.channel.send('Role does not have command permissions');
        }//else
    }
}