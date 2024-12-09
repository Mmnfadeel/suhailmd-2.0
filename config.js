const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07013990796";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID SUHAIL_22_19_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxUmFUa1d0cGFmUU5WV2FlZ1RMbC9lZGRkTDRVc0NZcmZlalJxSTUwbldrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNTTJrRG1WRlFwS2N3ZnNNQ1plbDN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4Mjg1YzVkLTZkZjMtNDkxMC05MTBiLTVjM2JkMjk3ZGNmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDEzOCxcbiAgICAgIDE0NCxcbiAgICAgIDk4LFxuICAgICAgMTc1LFxuICAgICAgMjA5LFxuICAgICAgMTcyLFxuICAgICAgMTA2LFxuICAgICAgODcsXG4gICAgICAxMDYsXG4gICAgICAxNCxcbiAgICAgIDkyLFxuICAgICAgMTM4LFxuICAgICAgNTYsXG4gICAgICAyMjYsXG4gICAgICAxNjksXG4gICAgICAyNTAsXG4gICAgICAxOTYsXG4gICAgICA5LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDE2NyxcbiAgICAgIDM0LFxuICAgICAgMzcsXG4gICAgICAzOSxcbiAgICAgIDk0LFxuICAgICAgMjAwLFxuICAgICAgMTU4LFxuICAgICAgMjQ2LFxuICAgICAgNzYsXG4gICAgICAxNDcsXG4gICAgICAyMDksXG4gICAgICA2NCxcbiAgICAgIDIyMixcbiAgICAgIDQ5LFxuICAgICAgMjI1LFxuICAgICAgMjUyLFxuICAgICAgMjEyLFxuICAgICAgMTU3LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRGUFc4WlZWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEzOTkwNzk2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Nzk3NjI5NzE2ODkxMToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHTjJhUUJFTjdaM2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0o4dDNITGw3Q2xzd1pNWDM1NDJsR3g2WEUwMEhBTGlwbzgxUHUxQ0Eydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1M2xHcGFHY3NkRlpSamVrelFJUzlycURmVmpSZjhqbE51MnBQUCtsRXh2QW13QVFNanlrazlaM25DQmMybTNvMVowWWhra0haNU9HSGtlVTcyL0xBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4UTIvWnIrMThrZTQyTGJlZWtpZk1Cb3ZUcEtOcmhvZ3JURjBNeHVzQjdtYXA0aHU1MmJDbVN6Sy85amJueEw4MUpHTlozMzJOcUlQWXJKZzR4WHVqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEzOTkwNzk2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzc4Mjc1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
