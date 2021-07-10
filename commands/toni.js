module.exports = {
    name: 'toni',
    description: "Sends twitch link!",
    execute(message, args){
       
        //Checks Role by ID or Name
        //let role = message.guild.roles.cache.find(r => r.name === "Certified 999"); //To check by name
        if(message.member.roles.cache.has('849076908523520020')){ 
            message.channel.send('https://m.twitch.tv/tvalentine_');
        }
        else{
            message.channel.send('Role does not have command permissions');
            //message.member.roles.add('849076908523520020').catch(console.error); //Add role by ID
            //message.member.roles.add(role).catch(console.error); //Add role by name 
        }
    }
}