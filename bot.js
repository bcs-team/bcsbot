const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client();



client.on('ready' , () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})
client.on('message', message => {
  if (message.content === '!dguide') {
      const embed = new Discord.MessageEmbed()
          .setTitle('Defender Guide for Brawlball')
          .setColor("#000000")
          .setThumbnail(client.user.avatarURL)
          .setDescription('get gud')
          .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed)
  }
})


client.on('message', message => {
  if (message.content ==='help') {
    message.channel.send("no go away")
  }
  })
client.on('message', message => {
  if (message.content ==='!help') { 
     let embed = new Discord.MessageEmbed()
          .setTitle('Commands')
          .setColor("#FF0000")
          .setThumbnail(client.user.avatarURL())
          .setDescription('Here is the codes you can use in this bot')
          .addField('**!rguide**', '``Showing Runner Guide for brawlball``', false)
          .addField('**!sguide**', '``Showing supporter Guide for brawlball``', false)
          .addField('**!dguide**', '``Showing Defender Guide for brawlball``', false)
          .setFooter('Brawlball Community Server', client.user.avatarURL())
    message.channel.send(embed);
  }
})
client.on('message', message => {
  if (message.content ==='!ez') { 
    let embed = new Discord.MessageEmbed()
    .setTitle("**Ez**")
    .setColor("#FF0000")
    .setDescription("ez")
  message.channel.send(embed);        
  
  }
})

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("789692987914584107")
  channel2.send(`${member} ** Welcome to Brawlball Community server **`)
})

    

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("789706902577348618")
    if (!channel) return 
      number = 10
  
  var images = ["https://i.ibb.co/XjVV1ty/bcs-welcome-image.png"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `A very warm welcome to you! It is lovely to have you among us! \n ${member}`,
      `We are delighted to have you among us \n ${member}`,
      `Welcome to the team! ${member} :wink: `,
      `Well well well look who is here Guys \n ${member}`,
      `Welcome aboard new buddy! ${member}`,
      `On behalf of all of us, Welcome onboard! \n ${member}`]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.MessageEmbed()
          .setTitle(member.user.username+" - "+"**has joined BCS**")
          .setColor(bbclrchos)
          .setThumbnail(member.user.avatarURL())
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);        
        })
  
 
client.login(process.env.BOT_TOKEN)
