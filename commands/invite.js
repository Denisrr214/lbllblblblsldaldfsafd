module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');

    //Code Start
      if (message.channel.type == "dm") return;
       let user = message.mentions.users.first();
   if(!user) user = message.author;

   const embed = new Discord.RichEmbed()
   .setTitle("My invite link")
   .setDescription("[Click here to add me](https://discord.com/oauth2/authorize?client_id=722909927621918792&scope=bot&permissions=8)")
   .setColor(`RANDOM`)
    message.channel.send({embed});

  


    //Code End

}

module.exports.config = {
    command: "invite"
}