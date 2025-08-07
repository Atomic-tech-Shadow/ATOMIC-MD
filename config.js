const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05aMXkxcXFBb3YwVmc3UkRUbFNDOHVZNndma3ArM0VjNkJPLzlQRDRITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXpwTFZVMUZWVGM0cTIwZlUrd1BIL0dDWVIyb1BqTzg1a1FGR0FyeCswcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS1ZaMXVWTW9nUFdiaUtoUmlTR1hOdnZTTEl6SnE0ektaODM4Y2l1ZWtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxeWpVclpHY2wrOStRQTdxUzNNWitnMVB4d2o4WEN0VmhKUUJRc2RTTEZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNT0NUajhJNjFMdXg0cGZ6MmFVVlR1ZFMzQzUyZE95aG1jNk5EeU0yRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims5b2thbEpQWGhhQm5ETGtKb2ptdFNZM2FPNmFpZTlpKzBuYjV3L3N2a0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VqT0hJQzhqeGJzbUkvL29PelJ0RllpTndTakJUSFZjTXA0UHpkd3Brdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmhnV1ZnWFV1dUJnazBRMDRyZEdobS8yZlkzbGt4NTFGNnY5dU9jRHVWZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXdUdMalgxc0lxSlhleUJjRFZsUHhoMWg0NjY5TnVjKy91dmpIQm5yK3VCdXFSZ1Y3UnNxbTRJVzBOWW9INkhyM0ZHcE12Y0pMWjRwcjc2Q3pzZGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJZYWpvblVhRHd1dWJSN1M5WmZoM3E4QnRyOE9ldktER2dlTTBHYVhPcm9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQMUxSTTRUSCIsIm1lIjp7ImlkIjoiMjI4OTYyMTEwODM6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlub3J1IEthZ2VuxY0gZGl0IGNpZCIsImxpZCI6IjM3Mzk2ODY3NDQ5MDcyOjMyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTc5aG13UTRwalB4QVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1puUUZVTStwc1RhUW51emg2d0MxM1dreTR3RWZhT2JqQ01MRkJVMFdRUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGphVVVCdkpRaUdVNXJJRnAydEJ6RzdvSTBPRlM5WERoNG1DQy91RVFGSlptN2NLWE0zcnRHT3lvclhQOFQrSXo4b1psd1p2cGZoOEhvZzJETzdZREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJTTzN0c3U4bXZ6aUV3V3JtQjdzOE93MmR2d3VRdW9aVURGRUNLRXFjY2NTRmhGcWhSL25qWjZKNThqTnFBZW5PbEZDT1d6MzRlN3JXeSthUUZFVGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTYyMTEwODM6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU21aMEJWRFBxYkUya0o3czRlc0F0ZDFwTXVNQkgyam00d2pDeFFWTkZrRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NTE2NTgxLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUifQ==",
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
