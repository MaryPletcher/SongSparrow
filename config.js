module.exports = {
TOKEN: "MTE1NjIyOTE3MjM1NjcxMDQzNA.Gu0B5c.OcR7yYWnFDQ1bB1p-xdG_ZpJYPvvEEplcG78Sg",
ownerID: ["1005244179472986163"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1156229172356710434&permissions=2150697024&scope=bot%20applications.commands", //write your discord bot invite.
supportServer: "", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://mary:Kc9KEQL5zF0WvBoU@atlascluster.n2g2zsz.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
status: '❤️ codeshare.me',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
embedColor: "ffa954", //hex color code
errorLog: "", //write your discord error log channel id.


// {
// 	"token": "MTE1NjIyOTE3MjM1NjcxMDQzNA.GutXx9.FsrYScZpY74odFtpwv696sHcpKD2ytN5T7xURQ",
//     "clientId": "1156229172356710434",
// 	"guildId": "1120178838983422052"
// }

sponsor: {
status: true, //true or false
url: "https://awmbilisim.com", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
