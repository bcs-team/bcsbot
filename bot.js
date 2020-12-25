const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client();



client.on('ready' , () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("691026608777330808")
  channel2.send(`${member} ** Welcome to Brawlball Community server **`)
})

    

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("691026608777330808")
    if (!channel) return 
      number = 10
  
  var images = ["https://i.ibb.co/HVjBXZ7/welcome-to-bcs.png"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `A very warm welcome to you! It is lovely to have you among us!  ${member}`,
      `Hey  ${member} Welcome to Brawlball Community Server`,
      `Welcome to the team! ${member} :wink: `,
      `Well well well look who is here Guys ${member}`,
      `Welcome aboard new buddy!${member}`,
      `On behalf of all of us, Welcome onboard! ${member}`]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.MessageEmbed()
          .setTitle(member.user.username+"  -  "+"has joined Brawlball Community server")
          .setColor(bbclrchos)
          .setThumbnail(member.user.avatarURL)
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);        
        })
  
 
client.login(process.env.BOT_TOKEN)
