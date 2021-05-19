require('dotenv').config()

const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const xdReact = "😆"
const loveReact = "❤️"
const stopReact = "🛑"
const eyeReact = "👀"

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    // console.log("he is chu")
})

const bot_prefix = "!"
const crewmate_command_add = "cm-role"
const crewmate_command_remove = "rcm-role"
const anbu_command_add = "anbu-role"
const anbu_command_remove = "anbu-role"

//msg delete part
client.on("messageDelete", msg => {
    msg.reply("Stop Deleting the Messages")
    client.on("message", msg => {
        if (msg.content == "Stop Deleting the Messages") {
            msg.react("🛑")
        }
    })
})


//creating kicking member 
client.on('message', msg => {
    // Ignore msgs that aren't from a guild
    if (!msg.guild) return;
  
    // If the msg content starts with "!kick"
    if (msg.content.startsWith('!kick')) {
        // Assuming we mention someone in the msg, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/msgMentions
        const user = msg.mentions.users.first();
        // If we have a user mentioned
        if (user) {
        // Now we get the member from the user
        const member = msg.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the msg author know we were able to kick the person
              msg.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              msg.reply('I was unable to kick the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
            msg.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
    } else {
        msg.reply("You didn't mention the user to kick!");
    }
    }
  });

//crew mate role 

client.on("message", msg => {
    //crewmate role added
    if (msg.content === (`${bot_prefix}${crewmate_command_add}`)) {
        msg.member.roles.add("755024484292886540")
        msg.reply(`crew mate role is added`)
    }
    //crewmate role remove
    else if (msg.content === `${bot_prefix}${crewmate_command_remove}`) {
        msg.member.roles.remove("755024484292886540")
        msg.reply("crew mate role is removed")
    }
})


//anbu black ops role

client.on("message", msg => {
    //crewmate role added
    if (msg.content === (`${bot_prefix}${anbu_command_add}`)) {
        msg.member.roles.add("755024484292886540")
        msg.reply(`Anbu role is added`)
    }
    //crewmate role remove
    else if (msg.content === `${bot_prefix}${anbu_command_remove}`) {
        msg.member.roles.remove("755024484292886540")
        msg.reply(`Anbu role is removed`)
    }
})

//avater

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
});

  //attachment
// client.on('message', message => {
//     // If the message is '!rip'
//     if (message.content === '!rip') {
//       // Create the attachment using MessageAttachment
//       const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
//       // Send the attachment in the message channel
//       message.channel.send(attachment);
//     }
// });

  // Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

//msg embeed
client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

//user msg part

client.on("message", msg => {
    if (msg.content === (`${bot_prefix}shreyash` || `${bot_prefix}Shreyash` || `${bot_prefix}khapper` || `${bot_prefix}Khapper`)) {
        msg.channel.send("Khapper is fucking legend bro")  
        client.on("message", msg => {
            if (msg.content == "Khapper is fucking legend bro") {
                msg.react(loveReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}khapper`)){
        msg.channel.send("Khapper is fucking legend bro")
        client.on("message", msg => {
            if (msg.content == "Khapper is fucking legend bro") {
                msg.react(loveReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}lhakpa`)) {
        msg.channel.send("lhakpa xakka ho")
        client.on("message", msg => {
            if (msg.content == "lhakpa xakka ho") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}luffy`)) {
        msg.channel.send("lhakpa xakka ho")
        client.on("message", msg => {
            if (msg.content == "lhakpa xakka ho") {
                msg.react(xdReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}nikita`)){
        msg.channel.send("Nikita is alu")
        client.on("message", msg => {
            if (msg.content == "Nikita is alu") {
                msg.react(xdReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}mayalu`)){
        msg.channel.send("Nikita is Alu")
        client.on("message", msg => {
            if (msg.content == "Nikita is Alu") {
                msg.react(xdReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}sudesh`)){
        msg.channel.send("Sudesh is chuitiya")
        client.on("message", msg => {
            if (msg.content == "Sudesh is chuitiya") {
                msg.react(xdReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}sagar`)){
        msg.channel.send("Sagar lauday")
        client.on("message", msg => {
            if (msh.content == "Sagar lauday") {
                msg.react(xdReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}manjila`)){
        msg.channel.send("manjila is vary beautiful")
        client.on("message", msg => {
            if (msg.content == "manjila is vary beautiful") {
                msg.react(loveReact)
            }
        })
    }
    else if(msg.content == (`${bot_prefix}bikita`)){
        msg.channel.send("bikita is sweet as momo")
        client.on('message', msg => {
            if (msg.content == "bikita is sweet as momo") {
                msg.react(loveReact)
            }
        })    
    }
    else if(msg.content == (`${bot_prefix}momo`)){
        msg.channel.send("bikita is sweet as momo")
        client.on('message', msg => {
            if (msg.content == "bikita is sweet as momo") {
                msg.react(loveReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}tisha`)) {
        msg.channel.send("tisha is vary moti kt")
        client.on('message', msg => {
            if (msg.content == "tisha is vary moti kt") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}bipul`)) {
        msg.channel.send("Bipul is madarchod")
        client.on('message', msg => {
            if (msg.content == "Bipul is madarchod") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}sarkar`)) {
        msg.channel.send("Bipul is madarchod")
        client.on('message', msg => {
            if (msg.content == "Bipul is madarchod") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}anish`)) {
        msg.channel.send("anish is chutiya")
        client.on('message', msg => {
            if (msg.content == "anish is chutiya") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == (`${bot_prefix}pawan`)) {
        msg.channel.send("pawan is madarchod")
        client.on('message', msg => {
            if (msg.content == "pawan is madarchod") {
                msg.react(xdReact)
            }
        })
    }
    else if (msg.content == `${bot_prefix}loveemoji`) {
        msg.channel.send(loveReact)
    }
    else if (msg.content == `${bot_prefix}xdemoji`) {
        msg.channel.send(xdReact)
    }
    else if (msg.content == `${bot_prefix}stopemoji`) {
        msg.channel.send(stopReact)
    }
    else if (msg.content == `${bot_prefix}eyeemoji`) {
        msg.channel.send(eyeReact)
    }
    else{
        client.on("message", msg => {
            msg.react(eyeReact)
        })
    }
})

client.login(process.env.TOKEN)


