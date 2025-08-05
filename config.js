const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFBcldaQnl0dk9xWk05dDBCYjI5Vk1YRmY4SjRJeTJ2eHJMVThEVzNIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDZ4L3htVHZGWFFuTG5uNzFPSHhleUcrQVN1LzVCWXJYU0FNNVBsdUtnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTDRGNEJ5ZUpHNkNKb0xFSWdQam5aVFdoZytlZ3Z0NThRZGxXbzJVM2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMnZLRGJqeEo0STFTTmNQNDFUNE9UOXpyMjR1U2cwN3B0eVlNVW9na1Y0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMN3ljdnc4VkdBcVVHYVJudlYrQXJiczRzaHlKeUkyUFVoUUFCTEpKV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA1VjhjR0VKMDR4Z3EwZlc2RzJRQWRHMFBDWDBhMGNscXZZNUNzV3A0Z3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5hTFJpemF5TlRQT1ZxaWZheUpXUVRUNU5hRVBKdFZ5d1ZkNllYUDBVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjdQTEZtYjlFVVBjTHV0QWs5QjR2SkE3azFMMjVKNWhTZk1UbmJ1emdEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml2MWVldnh6WHFrdUNMRGJNWHlialJsMXdicGtMRFp2U1NkRG9HeTgzM0x6U0h6NC9VaTBIN1l0M2hsRkw5b0FLYmY0aUI0bE9aL1p4UHR0Z09hWUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IktFQ2ZCcVp6NXNFNTlraEp5YXl1dVhYaXZpSjA5SmhxSDVJZlF0Ty9wUlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzkyNjE2MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQzNkUyQjYzRDFFODU3Qzg5M0I2NUEzNzkwNEY0NDkyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ0MDI2OTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM5MjYxNjI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MDVCQTE5RDgwOTg5NEZDOTM5RjFFM0FFQTNGMzMwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NDAyNjk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIM1hUSzc3NSIsIm1lIjp7ImlkIjoiOTIzMzkyNjE2MjYzOjU4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImFyc2xhbiIsImxpZCI6IjE2MzA4OTA4NTQyNzg5Njo1OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BiWXcrb0NFSVNmeU1RR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpiNDZsVTRHdTNrOWdXMnBtWWpPSGVZRVBqYlRra1FlRWxoWHdPWnlPWEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZrSVhrZTAza2lZRmM2SFNLaGc4MFFsMXd0OStoaHdZNFBLMzAycFpVQnlKcExaZWgvUjMzdU4wOUVVblRuUDFjOFRoR2JBVW02L0w4Z1hIdCsvd0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpeCtCOGpyTThPN2FtTzZuYVJ5WXR4MDhNT1M3bE1DUGVSNmhITk1YMVRWUkVTZlQ4TXZ6KzB3WnYxZmxFa3FVaDlQYTd5aXhXSjBmL1pTQzlkUHZEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM5MjYxNjI2Mzo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVytPcFZPQnJ0NVBZRnRxWm1JemgzbUJENDIwNUpFSGhKWVY4RG1jamx4In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MDI2OTQsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFN2EifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan Botz 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/wzdxwt.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan Botz",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Arslan Botz",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
