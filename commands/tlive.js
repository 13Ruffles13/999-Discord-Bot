module.exports = {
    name: 'tlive',
    description: "Twitch Toni Embed!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00334C')
        .setTitle('Toni is Live!')
        .setURL('https://m.twitch.tv/tvalentine_')
        .setDescription('Come watch the stream!')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Drop a follow'},
            {name: 'Rule 3', value: 'No backseating'}
        ) //Rule bracket
        .setImage('https://images-ext-2.discordapp.net/external/0nngxg5uEquHyfFHwxPGN7NH2dx3Q3qVCKbbqICJGfE/https/static-cdn.jtvnw.net/jtv_user_pictures/e89d5440-cca5-480d-aa26-e00479d77815-profile_image-300x300.png')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}