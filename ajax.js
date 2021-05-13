require('dotenv').config()

const Discord = require("discord.js")
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    // console.log("he is chu")
})

const bot_prefix = "!"
const crewmate_command_add = "cm-role"
const crewmate_command_remove = "rcm-role"

client.on("messageDelete", msg => {
    msg.channel.send("Stop Deleting the Messages")
    client.on("message", msg => {
        if (msg.content == "Stop Deleting the Messages") {
            msg.react("🛑")
        }
    })
})

client.on("message", msg => {
    //crewmate role added
    if (msg.content === (`${bot_prefix}${crewmate_command_add}`)) {
        msg.member.roles.add("755024484292886540")
        msg.reply(`crew mate role is added to ${client.member}`)
    }
    //crewmate role remove
    else if (msg.content === `${bot_prefix}${crewmate_command_remove}`) {
        msg.member.roles.remove("755024484292886540")
        msg.reply("crew mate role is removed")
    }
})

client.on("message", msg => {
    if (msg.content == (`${bot_prefix}shreyash` || `${bot_prefix}Shreyash` || `${bot_prefix}khapper` || `${bot_prefix}Khapper`)) {
        msg.channel.send("Khapper is fucking legend bro")  
        client.on("message", msg => {
            if (msg.content == "Khapper is fucking legend bro") {
                msg.react("❤️")
            }
        })
    }
    else if(msg.content == (`${bot_prefix}khapper`)){
        msg.channel.send("Khapper is fucking legend bro")
        client.on("message", msg => {
            if (msg.content == "Khapper is fucking legend bro") {
                msg.react("❤️")
            }
        })
    }
    else if (msg.content == (`${bot_prefix}lhakpa` || `${bot_prefix}lhakpa` || `${bot_prefix}Luffy`)) {
        msg.channel.send("lhakpa xakka ho")
        client.on("message", msg => {
            if (msg.content == "lhakpa xakka ho") {
                msg.react("😆")
            }
        })
    }
    else if(msg.content == (`${bot_prefix}nikita` || `${bot_prefix}niku` || `${bot_prefix}mayalu` || `${bot_prefix}Mayalu`)){
        msg.channel.send("Nikita is alu")
        client.on("message", msg => {
            if (msg.content == "Nikita is alu") {
                msg.react("😆")
            }
        })
    }
    else if(msg.content == (`${bot_prefix}sudesh` || `${bot_prefix}Sudesh`)){
        msg.channel.send("Sudesh is ...")
    }
    else if(msg.content == (`${bot_prefix}sagar` || `${bot_prefix}Sagar`)){
        msg.channel.send("Sagar lauday")
    }
    else if(msg.content == (`${bot_prefix}manjila` || `${bot_prefix}Manjila`)){
        msg.channel.send("manjila is Pagal")
    }
})

client.login(process.env.TOKEN)
