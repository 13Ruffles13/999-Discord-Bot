const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
//const { VoiceChannel } = require('discord.js');
const { execute } = require('./play');
//const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: 'Music bot',
    async execute(message, args){
        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        //Validation 2:
        if(!permissions.has('CONNECT'));
    }
}