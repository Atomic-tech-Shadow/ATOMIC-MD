const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtwZ1o1akhKVElOUmhmMlNzUll2WVN1TzBWajNrVzRnVXY5WHV4ZElHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3VtWnJHd2tPMGpqOEVEbThMWTZNelZITzBxYjBscHg3UzdQbnc2dVdUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSHozTURpTXJ5NURQZkxpTEJOUDZKY3puUks5QklmWDU4cnYvajRjM2tZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZEZJTE1mNEdzdWMvQ2hlb1kzTDFpKzhiV0xKMG1wYVRlUFI2N1IyM1Q4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCR2ZOK29XY3V5ZXN5ZURId1BBY1J5bFFPTERvb0ZucUxBRG83L1dLV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFSbGg1cUJIRjIvc3I5SlR2OW9TcFNQczNBZ3R3UDJXL3VBS0JLN1UwUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lneVZ3VUtPaHVGM3NFeVRDa3ZEcHlQUE1rbHBXWVpuTUdGYnUySWZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDJsanVvT0svNDVGWjhpcXMvNERyRnVHOEo3YTRnVVBTeTR0VzRBRzZpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZhYURRK2daRm9GYkt5Wk4rU25BUE9WeTgrWFlidS9oWGNjcXoreW1TODNvelg4R3NHMnZZSGIxSWtCRytBQ3owK3B3M3RvTmd3ZHFkNGp0dkZjYmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJITk9KSHE1V2pveVdWZExMSGVxSERselJpZU1DZXBua0h1aldKRkNXeU9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKQzVaTkFNUCIsIm1lIjp7ImlkIjoiMjI4OTYyMTEwODM6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlub3J1IEthZ2VuxY0gZGl0IGNpZCIsImxpZCI6IjM3Mzk2ODY3NDQ5MDcyOjMzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTc5aG13UXBPN1V4QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1puUUZVTStwc1RhUW51emg2d0MxM1dreTR3RWZhT2JqQ01MRkJVMFdRUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYk05VnJSSHAyaW5Qb1pxaTd5aC9wR0gwVXlpb2RsTWhlWDZNVW5rbXloek9uaStmOTNnaWhsd1M1c09SUk45TXNPVis4aXo0bjhZQTZMMjJtZm5EREE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9CNTdHTTUvWGZRWXdIaHlTaWx6WVJsZ0FBRnRiU1VxbXJsbU1ud2NxVWRSWmRXUWlLUFUrVVJHSlJPbVhoc2duOVF5SmVSMnVFTTE1dXNtRjFvTWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTYyMTEwODM6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU21aMEJWRFBxYkUya0o3czRlc0F0ZDFwTXVNQkgyam00d2pDeFFWTkZrRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NjA5NDQ3LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUifQ==",
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
