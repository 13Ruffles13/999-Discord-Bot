const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { VoiceChannel } = require('discord.js');
const { execute } = require('./999');
const queue = new Map();

module.exports = {
    name: 'play',
    description: 'play music',
    async execute(message, queue){
        const serverQueue = queue.get(message.guild.id);
        
    }
}