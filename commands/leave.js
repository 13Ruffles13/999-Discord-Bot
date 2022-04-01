const { execute } = require("./tlive");

module.exports = {
    name: 'leave',
    description: 'Stop 999 music and leave channel',
    async execute(message, args){
        if(message.member.roles.cache.has(('354050497591771136'))){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave(); //leave voice channel
        await message.channel.send('Leaving channel :smiling_face_with_tear:')
        }//if
        else{
            message.channel.send('Role does not have command permissions');
        }//else
    }
}