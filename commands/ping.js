module.exports = {
    name: 'ping',
    description: 'This is a ping commmand!',
    execute(message, args){
        if(message.member.roles.cache.has(('849077623782899743' || '354050497591771136'))){
        message.channel.send(`:ping_pong: Pong!`);
        }//if
        else{
            message.channel.send('Role does not have command permissions');
        }//else
    }
}