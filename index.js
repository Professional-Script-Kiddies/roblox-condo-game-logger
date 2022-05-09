const express = require("express")
const disbut = require('discord-buttons');
const discord = require("discord.js")
const noblox = require("noblox.js")
const client = new discord.Client()
const pog = require('./fetch.js')
pog()

disbut(client);
const app = express()
const port = 9000

// 7 PEOPLE ALREADY STOLE THE SRC IT BELONGS TO Bling#9999
// Relasing on github before some retard does
app.use(express.json())
app.listen(
    port,
    () => console.log(`app online`)
)
app.post('/data', async (req, res) => {
    const url = req.body;
    const serverName = req.body;
    
    if(!url){
       return res.send("when impostor is sus")
    }
    if(!serverName){
       return res.send("when impostor is sus")
    }
    

    let log = url.url.split("/");


    await noblox.getPlaceInfo(log[4]).then((res) => {
        const channel = client.channels.cache.find(channel => channel.id === "973129670713282571")

        const embed = new discord.MessageEmbed()

        .setAuthor("Digitals.")
        .setDescription("A condo just got logged!")
        .setURL(url.url)
        .setColor('0x2F3136')
        .addField('Name', res.Name, true)
        .addField('Creator Name', res.Builder, true)
        .addField('Players', res.OnlineCount, true)
        .addField('Max Players', res.MaxPlayers, true)
        const linkbutton = new disbut.MessageButton()
        linkbutton.setStyle("url")
        linkbutton.setLabel("Play")
        linkbutton.setURL(url.url)
        const row = new disbut.MessageActionRow()
        .addComponent([linkbutton])

        channel.send(embed, {component: row})

    })


});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.login(process.env.token);
