const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client();



client.on('ready' , () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("535540529379672074")
  channel2.send(`${member} has join to Our Style server`)
})

    

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("613400026978320395")
    if (!channel) return 
      number = 10
  
  var images = ["https://raw.githubusercontent.com/astrulmr/bots/master/1.png", "https://raw.githubusercontent.com/astrulmr/bots/master/2.png", "https://raw.githubusercontent.com/astrulmr/bots/master/3.png", "https://raw.githubusercontent.com/astrulmr/bots/master/4.png", "https://raw.githubusercontent.com/astrulmr/bots/master/5.png", "https://raw.githubusercontent.com/astrulmr/bots/master/6.png", "https://raw.githubusercontent.com/astrulmr/bots/master/7.png", "https://raw.githubusercontent.com/astrulmr/bots/master/8.png", "https://raw.githubusercontent.com/astrulmr/bots/master/9.png"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `OMG !!! Is that you  ${member} Welcome Dude `,
      `Hey  ${member} Welcome to Our Style `,
      `Great we're glad you came  ${member} :wink: `,
      `Well well well look who is here Guys ${member}`,
      `I have to tell you something come here ~WELCOME~  ${member} :neutral_face: `,
      `Is that you, wait no. You are ${member} Anyway Welcome `]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.MessageEmbed()
          .setTitle(member.user.username+" "+"`Has joined to Our Style server`")
          .setColor(bbclrchos)
          .setThumbnail(member.user.avatarURL)
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);        
        })
  
 
client.login(process.env.BOT_TOKEN)
