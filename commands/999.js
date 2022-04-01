const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { VoiceChannel } = require('discord.js');

module.exports = {
    name: '999',
    description: '999 music',
    async execute(message, args){
        if(message.member.roles.cache.has(('849077623782899743' || '354050497591771136'))){
        const voiceChannel = message.member.voice.channel;

        //Validate arguments
        if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT'))return message.channel.send('You do not have the correct permissions');
        if(!permissions.has('SPEAK'))return message.channel.send('You do not have the correct permissions');
        if(!args.length) return message.channel.send('You need to send the second argument!');

        //Validate URL
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        //Url function
        if(validURL(args[0])){
            //message.channel.send('You entered a correct url!');

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });

            await message.reply(`:fire: Now Playing ***Your Link!*** :fire:`)

            return
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        //After a result
        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'}); //audio only
            connection.play(stream, {seek: 0, volume: 1}) //filters
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`:fire: Now Playing ***${video.title}*** :fire:`)
        }else{
            message.channel.send('No video results found');
        }

        }//if

        else{
            message.channel.send('Role does not have command permissions');
        }//else

    }
}