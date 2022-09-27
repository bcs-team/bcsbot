
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
client.setMaxListeners(0);
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
// client.on('message', message => {
//   if (message.content === '!editez') {
//     let embed = new Discord.MessageEmbed()
//     .setTitle("React if you want to get ping for Game Night")
//     .setColor("#000000")
//     .setThumbnail("https://i.pinimg.com/originals/d0/a5/da/d0a5da11a96cd3e12ff69a7c646a0661.jpg")
//     .setDescription('React with this')
//     .addField('**Game Night**', ':night_with_stars: ', true)
//   message.channel.send(embed);  
//   }
// })


// client.on('message', message => {
//   if (message.content === '!bbkf') {
//     let embed = new Discord.MessageEmbed()
//     .setTitle("React to get bbkfdbsbbtbbctfhcs info")
//     .setColor("#FFC0CB")
//     .setThumbnail("https://i.ibb.co/pLQ96FJ/bkctflogo.png")
//     .setDescription('React with this 🔔')

//   message.channel.send(embed);
//   }
// })

client.on('ready', () => {
  client.guilds.cache.get('789692987143094293').channels.cache.get('793193064931655690').messages.fetch('793197949491609641');
  client.guilds.cache.get('789692987143094293').channels.cache.get('793193064931655690').messages.fetch('867598495518556190');
  client.guilds.cache.get('789692987143094293').channels.cache.get('793193064931655690').messages.fetch('868462174408933416');
  client.guilds.cache.get('789692987143094293').channels.cache.get('793193064931655690').messages.fetch('1024204269462769674');
////////////  FETCH CLANS ///////////////////////////
//   client.guilds.cache.get('789692987143094293').channels.cache.get('789964691866386484').messages.fetch('893614500924760085');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('789964771855302656').messages.fetch('893618264264032336');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('789965482953277500').messages.fetch('893617957161295893');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('808735384753930281').messages.fetch('893620807861944371');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('841987386756825099').messages.fetch('893620913227059220');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('882471760879026206').messages.fetch('893620999466147880');
//   client.guilds.cache.get('789692987143094293').channels.cache.get('887482939452039168').messages.fetch('893632656057696296');

  ////////////////////////////////////clans annouc////////////////////////////////////


})
client.setMaxListeners(0);
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
//----------------------------------------SEA brawlball react-------------------------------------------------
client.setMaxListeners(0);
client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇸🇬') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('864874319824683028');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇸🇬') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('864874319824683028');
      })
    }
  }
});
//----------------------------------------BRZ brawlball react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇧🇷') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('864874517406941204');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇧🇷') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('864874517406941204');
      })
    }
  }
});
//----------------------------------------JPN brawlball react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇯🇵') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('864874666778165248');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇯🇵') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('864874666778165248');
      })
    }
  }
});
//----------------------------------------AUS brawlball react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇦🇺') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('864893349512871956');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🇦🇺') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('864893349512871956');
      })
    }
  }
});
client.setMaxListeners(0);

//----------------------------------------eu ranked react-------------------------------------------------




                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked eu  add

                        const { message, emoji } = messageReaction; 

                        if(message.channel.id == '793193064931655690'){
                        const eueu = message.guild.emojis.cache.get('867487337633415178')
                        if(emoji.id == eueu) {

                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919212084789270')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked eu remove
                          
                        const { message, emoji } = messageReaction;
                        if(message.channel.id == '793193064931655690'){
                          const eueu = message.guild.emojis.cache.get('867487337633415178')
                        if(emoji.id == eueu) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919212084789270')
                            }})
                            }}});

//----------------------------------------na ranked react-------------------------------------------------



                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked na  add
                      

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const useuse = message.guild.emojis.cache.get('867487404373835796')

                      if(emoji.id == useuse) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919568156426290')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked na remove

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const useuse = message.guild.emojis.cache.get('867487404373835796')

                      if(emoji.id == useuse) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919568156426290')
                            }})
                            }}});



                            
  //----------------------------------------sea brawlball react-------------------------------------------------




                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked sea  add

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const seasea = message.guild.emojis.cache.get('867487432139603969')

                      if(emoji.id == seasea) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919662981644306')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked sea remove

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const seasea = message.guild.emojis.cache.get('867487432139603969')

                      if(emoji.id == seasea) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919662981644306')
                            }})
                            }}});




//----------------------------------------BRZ brawlball react-------------------------------------------------




                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked brz  add

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const brzbrz = message.guild.emojis.cache.get('867487382197764116')

                      if(emoji.id == brzbrz) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919762982240256')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked brz remove

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const brzbrz = message.guild.emojis.cache.get('867487382197764116')

                      if(emoji.id == brzbrz) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919762982240256')
                            }})
                            }}});



//----------------------------------------AUS brawlball react-------------------------------------------------




                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked aus  add
                      

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const ausaus = message.guild.emojis.cache.get('867487291320041522')

                      if(emoji.id == ausaus) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919944294006795')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked aus remove

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const ausaus = message.guild.emojis.cache.get('867487291320041522')

                      if(emoji.id == ausaus) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919944294006795')
                            }})
                            }}});





//----------------------------------------JPN ranked react-------------------------------------------------




                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //ranked jpn add
                      

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const jpnjpn = message.guild.emojis.cache.get('867487361579614239')

                      if(emoji.id == jpnjpn) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('865919798391210014')
                        }})
                        }}});

                        client.on('messageReactionRemove', (messageReaction, user) => {

                          //ranked jpn remove

                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '793193064931655690'){
                        const jpnjpn = message.guild.emojis.cache.get('867487361579614239')

                      if(emoji.id == jpnjpn) {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.remove('865919798391210014')
                            }})
                            }}});


//----------------------------------------RUN react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🏃') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('868455186031595520');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🏃') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('868455186031595520');
      })
    }
  }
});
//----------------------------------------SUP react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '⚔️') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('868456428548026378');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '⚔️') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('868456428548026378');
      })
    }
  }
});
//----------------------------------------DEF react-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🛡️') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('868456587130454067');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🛡️') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('868456587130454067');
      })
    }
  }
});




//----------------------------------------Game Night-------------------------------------------------

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🌃') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.add('962576436626083841');

      })
    }
  }
});
client.on('messageReactionRemove', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (message.channel.id == '793193064931655690') {
    if (emoji.name == '🌃') {
      message.guild.members.fetch(user.id).then(member => {
        member.roles.remove('962576436626083841');
      })
    }
  }
});










// //----------------------------------------clans annouc react-------------------------------------------------


// //our style
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '789964691866386484') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893278711770660946');

//       })
//     }
//   }
// });
// //pyrateers
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '789964771855302656') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893278894663286826');

//       })
//     }
//   }
// });
// //prs
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '789965482953277500') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893279039924604951');

//       })
//     }
//   }
// });
// //popcorn
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '808735384753930281') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893279140197834802');

//       })
//     }
//   }
// });
// //azpects
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '841987386756825099') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893279151568588890');

//       })
//     }
//   }
// });
// //tort hort
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '882471760879026206') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893279375317942282');

//       })
//     }
//   }
// });
// //bbkfctf 
// client.on('messageReactionAdd', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '887482939452039168') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.add('893279547708031006');

//       })
//     }
//   }
// });

// //#####################################################################################################

// // our style
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '789964691866386484') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893278711770660946');
//       })
//     }
//   }
// });
// // pyra
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '789964771855302656') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893278894663286826');
//       })
//     }
//   }
// });
// // prs
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '793193064931655690') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('789965482953277500');
//       })
//     }
//   }
// });
// // popcorn
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '808735384753930281') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893279140197834802');
//       })
//     }
//   }
// });
// // azpects
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '841987386756825099') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893279151568588890');
//       })
//     }
//   }
// });
// // tort hort
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '882471760879026206') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893279375317942282');
//       })
//     }
//   }
// });
// // bbkfctf
// client.on('messageReactionRemove', (reaction, user) => {
//   let message = reaction.message, emoji = reaction.emoji;
//   if (message.channel.id == '887482939452039168') {
//     if (emoji.name == '🔔') {
//       message.guild.members.fetch(user.id).then(member => {
//         member.roles.remove('893279547708031006');
//       })
//     }
//   }
// });
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
