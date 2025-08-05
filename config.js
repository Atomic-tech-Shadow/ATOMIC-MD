const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpnV2pYc2dRRUVZNCtkcDdONkJidDJzVCtSZFhCTFRTZFQ1SXBxRVhudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEV1SFFZWUxIZVFDMUdKNFdoS1NDeUJvK1lQQ1M3YkNoeTk5dTF1UHdqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR1MyWEVUVnZLeUZ6cGU3V0FHN3U5Yy82M3Q1NEE4ZFh4Tk5BS090Ulg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTGZFUDZKR0dvZE9ycG9KOEpyTzNWQ3NzK0lSck1oVjZ1VWhSTEtZMzFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCYlpUL3VNU2NZd1UxQ0xHa1dseHNRaTg3VjdPYUc3YkJoM3ZRWE9aR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJZUWJxSVFiSmVMbmpGbzBQcVcyaHRnaGxpVGN4RmtvWVlBMEkwMWQ2Rmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUsvOTVUU0pnYjZ6b0lGYyt4QkZRWmxDVGJYS3c3WE1EQkkzS29SeDAzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDl4UlpKN3pVUzJLZDI2VkNqQnQwR0IvVVVOK1lpWFdZdDI2dkUvM0NBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ6Vnhielo4cEs1bm1jQ0pUV1BPQ0xTVXI0TDhpaXlvU2pTUDBmNmJvU3FIZkU4Zk02RVNyaWYxcFNmbFU3SlRUclVsWk5wMHRlVTBOL1g3akcrM0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IldjZUtQb2p4RmxkSk94QldPM2lwdS9MeUFaNFN0YVJNM2RzbFZCMFJadDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhOV0MxNzNRIiwibWUiOnsiaWQiOiIyMjg5NjIxMTA4MzozMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNaW5vcnUgS2FnZW7FjSBkaXQgY2lkIiwibGlkIjoiMzczOTY4Njc0NDkwNzI6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNzlobXdROGJySnhBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLWm5RRlVNK3BzVGFRbnV6aDZ3QzEzV2t5NHdFZmFPYmpDTUxGQlUwV1FRPSIsImFjY291bnRTaWduYXR1cmUiOiJzSjlycTMrclYydk5BZzg1NWVndmJMZlJQb2FweGlZbjgzRzEzUVVnYzY5ZFA1TmxQNXBtbk04c2RVaDY0U3NFUTVIN2d2VU5yOEdQWGdJeGxtSmdCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYlFHQ2xFSFZUblZoOEYzcUN6SCthNU0xWWhrMlN0bmNJemE2ZzgxQTFON3FXOWJuUHhiTDhuTkh2cVNsSVhkVXZQMTU3ckJkTUZ2TWUwQXJjV3pjQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5NjIxMTA4MzozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbVowQlZEUHFiRTJrSjdzNGVzQXRkMXBNdU1CSDJqbTR3akN4UVZORmtFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MjI2NDUsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUZaIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Atomic Md 🤍*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/a6z3ef.jpg",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/s1kqfx.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "!",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "☢ᴀᴛᴏᴍɪᴄ➳ᴍᴅ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Atomic Md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "22871394585",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*╭∩╮ᴇʟ(ಠ_ಠ)ᴄɪᴅ╭∩╮*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© 𝘚𝘏𝘈𝘋𝘖𝘞 𝘎𝘈𝘙𝘋𝘌𝘕 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/a6z3ef.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 𝙄 𝘼𝙈 𝘼𝙏𝙊𝙈𝙄𝘾 ⚡",
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
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "22871394585",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
