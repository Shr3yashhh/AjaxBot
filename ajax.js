require('dotenv').config()

const Discord = require("discord.js")
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

//msg delete part
client.on("messageDelete", msg => {
    msg.channel.send("Stop Deleting the Messages")
    client.on("message", msg => {
        if (msg.content == "Stop Deleting the Messages") {
            msg.react("🛑")
        }
    })
})

//crew mate role 

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

//user msg part

client.on("message", msg => {
    if (msg.content == (`${bot_prefix}shreyash` || `${bot_prefix}Shreyash` || `${bot_prefix}khapper` || `${bot_prefix}Khapper`)) {
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
    else if (msg.content == `${bot_prefix}lovereact`) {
        msg.channel.send(loveReact)
    }
    else{
        client.on("message", msg => {
            msg.react(eyeReact)
        })
    }
})

client.login(process.env.TOKEN)
