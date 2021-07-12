module.exports = {
    name: 'tlive',
    description: "Twitch Toni Embed!",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('849077623782899743')){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#e773d2')
        .setTitle('Toni is Live!')
        .setURL('https://m.twitch.tv/tvalentine_')
        .setDescription('Come watch the stream!')
        timestamp = datetime.now()
        .addFields(
            {name: 'Rule 1', value: 'Be rootin'},
            {name: 'Rule 2', value: 'Be tootin'},
            {name: 'Rule 3', value: 'But most importantly, be kind'}
        ) //Rule bracket
        .setImage('https://images-ext-2.discordapp.net/external/0nngxg5uEquHyfFHwxPGN7NH2dx3Q3qVCKbbqICJGfE/https/static-cdn.jtvnw.net/jtv_user_pictures/e89d5440-cca5-480d-aa26-e00479d77815-profile_image-300x300.png')
        .setFooter('Make sure to drop a follow');

        message.channel.send(newEmbed);
        }//if
        else{
            message.channel.send('Role does not have command permissions');
        }//else
    }
}