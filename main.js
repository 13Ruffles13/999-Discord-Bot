const Discord = require('discord.js'); //Node module

const client = new Discord.Client(); //Creating bot

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) //commandsFolder
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//Bot status
client.once('ready', () => {
    console.log('Hotboys is online!')
    client.user.setActivity('999', { type: 'WATCHING'}).catch(console.error);

});

//Auto-join New members and announce in welcome channel
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('849066707745767435').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the info channel.`)
})

//Command Block {General Functions}
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return; //Must start with prefix

    const args = message.content.slice(prefix.length).split(/ +/); //To have multiple commands with space
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args); //Grab files
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
});

//Command block {Tonni functions}
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return; //Must start with prefix

    const args = message.content.slice(prefix.length).split(/ +/); //To have multiple commands with space
    const command = args.shift().toLowerCase();

    if (command === 'toni'){
        client.commands.get('toni').execute(message, args);
    } 
    else if (command === 'tlive'){
        client.commands.get('tlive').execute(message, args, Discord); //Embeds command
    }
});

//Command block {Music functions}
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return; //Must start with prefix

    const args = message.content.slice(prefix.length).split(/ +/); //To have multiple commands with space
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === '999'){
        client.commands.get('999').execute(message, args);
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }
});

//Roles Discord[\@ role name to get ID]
client.login(process.env.token); //TokenBot

//Upon editing must save project save summary on GitHub and commit to master
