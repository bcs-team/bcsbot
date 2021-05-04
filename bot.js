
const Discord = require('discord.js');
const { Client, RichEmbed, Attachment } = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();



client.on('ready', () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////BRAWLBALL GUIDES CODE//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === '!dguide') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Defender Guide for Brawlball**')
      .setColor("#91A6A6")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1N8ZLI5BwNHCE-lb3LmrtXpn53qHhpMnAnkOtxDOybbQ/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/TKyMTpR/def2.png')
      .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed)
  }
})
client.on('message', message => {
  if (message.content === '!rguide') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Runner Guide for Brawlball**')
      .setColor("#000000")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1RJ-dsOWO45vVJFZPNPpibL2cwl3oGPnXCmIY-5Sa7O0/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/R3fVWh6/run2.png')
      .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed)
  }
})
client.on('message', message => {
  if (message.content === '!sguide') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Supporter Guide for Brawlball**')
      .setColor("#FF0000")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1Ho9EDdAyNlFyLD6pmAZFtjiJQjo47DsZD_Ash2XXL2U/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/1dshDkY/SUP2.png')
      .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed)
  }
})



client.on('message', message => {
  if (message.content === '!guides') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Runner Guide for Brawlball**')
      .setColor("#000000")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1RJ-dsOWO45vVJFZPNPpibL2cwl3oGPnXCmIY-5Sa7O0/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/R3fVWh6/run2.png')
    message.channel.send(embed)
  }
})
client.on('message', message => {
  if (message.content === '!guides') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Supporter Guide for Brawlball**')
      .setColor("#FF0000")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1Ho9EDdAyNlFyLD6pmAZFtjiJQjo47DsZD_Ash2XXL2U/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/1dshDkY/SUP2.png')
    message.channel.send(embed)
  }
})
client.on('message', message => {
  if (message.content === '!guides') {
    const embed = new Discord.MessageEmbed()
      .setTitle('**Defender Guide for Brawlball**')
      .setColor("#91A6A6")
      .setThumbnail(client.user.avatarURL)
      .setDescription("Click [Here](https://docs.google.com/document/d/1N8ZLI5BwNHCE-lb3LmrtXpn53qHhpMnAnkOtxDOybbQ/edit?usp=sharing) To View The Guide")
      .setImage('https://i.ibb.co/TKyMTpR/def2.png')
    message.channel.send(embed)
  }
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////TEST CODE//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





client.on('message', message => {
  if (message.content === '!test') {
    message.channel.send("BCS Working Fine")
  }
})
client.on('message', message => {
  if (message.content === '!help') {
    let embed = new Discord.MessageEmbed()
      .setTitle('Commands')
      .setColor("#FF0000")
      .setThumbnail(client.user.avatarURL())
      .setDescription('Here are the commands you can use for this bot')
      .addField('**!rguide**', '``Showing Runner Guide for brawlball``', false)
      .addField('**!sguide**', '``Showing supporter Guide for brawlball``', false)
      .addField('**!dguide**', '``Showing Defender Guide for brawlball``', false)
      .addField('**!guides**', '``To view all brawlball guides``', false)
      .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed);
  }
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////reactions CODE//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready', () => {
  client.guilds.cache.get('789692987143094293').channels.cache.get('793193064931655690').messages.fetch('793197949491609641');
})

//-------------------------------------eu brawlball reaction-----------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇪🇺') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('793193784404869200');
        member.roles.add('789701228279627814');
      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇪🇺') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('793193784404869200');
      })
    }
  }
});
//-------------------------------------us brawlball reaction-----------------------------------------
client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇺🇸') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('793193942748233769');
        member.roles.add('789701228279627814');
      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇺🇸') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('793193942748233769');
      })
    }
  }
});

//----------------------------------------brawlballians-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🏈') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('789701228279627814');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🏈') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('789701228279627814');
      })
    }
  }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////MAKE BOT TALK///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
  const prefix = "+";


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "send") {
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    if (message.deletable) message.delete();
    message.channel.send(args.join(" "));
  }

});

client.on("message", async message => {
  const prefix1 = "+";


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix1)) return;

  const args1 = message.content.slice(prefix1.length).trim().split(/ +/g);
  const cmd = args1.shift().toLowerCase();

  if (cmd === "edit") {
    if (message.deletable) message.delete();

    message.channel.messages.fetch({ around: args1[0].toLowerCase(), limit: 1 })
      .then(messages => {
        if (!message.member.hasPermission(["MANAGE_MESSAGES"]))
          return message.channel.send("You do not have permission to  this")
        else
          messages.first().edit(args1.slice(1).join(" "));
      })
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////WELCOME MSGS CODE//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("789692987914584107")
  channel2.send(`${member} ** Welcome to Brawlball Community server **`)
  //var role = member.guild.roles.cache.find(role => role.name === 'Brawlballians');
  //  member.roles.add(role)
})



client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get("789706902577348618")
  if (!channel) return
  number = 10





  var images = ["https://i.ibb.co/XjVV1ty/bcs-welcome-image.png"];
  var image = Math.floor(Math.random() * images.length);



  var bbmsg = [`A very warm welcome to you! It is lovely to have you among us! \n ${member}`,
  `We are delighted to have you among us \n ${member}`,
  `Welcome to the team! ${member} :wink: `,
  `Well well well look who is here Guys \n ${member}`,
  `Welcome aboard new buddy! ${member}`,
  `On behalf of all of us, Welcome onboard! \n ${member}`]

  var bbcolor = ["#FF0000", "#0000FF", "#000000", "#FFFF00", "#FFFFFF", "#800080", "#008000", "#808080", "#ADD8E6"]

  var bbccrndm = Math.floor(Math.random() * bbcolor.length)
  var bbclrchos = bbcolor[bbccrndm]

  var bbrandom = Math.floor(Math.random() * bbmsg.length)
  var bbchoose = bbmsg[bbrandom]
  let embed = new Discord.MessageEmbed()
    .setTitle(member.user.username + " - " + "**has joined BCS**")
    .setColor(bbclrchos)
    .setThumbnail(member.user.avatarURL())
    .setDescription(bbchoose)
    .setImage(String([images[image]]))

  channel.send(embed);
})

client.login(process.env.BOT_TOKEN)
