const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhWQ2tYRzhKZ2UvRFBhdGRKRjlpYk54dU0vajROQUliWjFnaTJ2dXduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlBBYnJ0RmF4dGw2T3gxRS8zSi9iM0pjQzh3S2MxSllCajRMdnhnT2xnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTlZQL0xGYUNJMzFsd1lPSzB3V0h0NjBoWHJ1dTJBK0x4MVFCOS9YLzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QWtxeDVEelEvLzU4bUkxRVRUU2ZqMHd3TUhBeXI3c3ZqMVBncFZHekE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOaEtUK1ZOd1FkR3UxQ3R1TUYxU284a0RQNDJteTNXakJyNlJHMFVvMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMSytDQXZ6RVU3QnozUnR2T0hUWjVvdjk2dVFPa1NFMFZjUVZ6emEzVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0dUQ1llWURIVytDT2pZSnVFMFY1STV3d1dyWHN1aHdtL09DS3d1eUQzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkNJL05xVjJnR0VCMTNCZkozdlBnazNrSzNuUG1MaG9CODE1amV4eFFFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvdlNubmpPZEVpejBLL3JpckYxdE5ObDlySS93cTcwWmFQOUx4YktkQksxUG9tL1hKMG9IV3doN3A3TjZzME9ReERmMmJJcWl5c0JxSm9iM3FMNEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJwQVRzTXpUbnZqRkgrY2VURjRRM1FaY3BXTXhFQVR6aVV4eFpzVDdsNHFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqTlpxUnJyU1NaaXQzeGZHcVphTXh3IiwicGhvbmVJZCI6ImNmYjY3NmJlLTViMmItNDA0MS1iYjQ1LTMyNTJmY2FlODI1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVHJKRmxmVzY2V0dYSHBSMk5mcWh4VGZXNEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzRmVjRONjVHcytkb0VTL1J4WWNlbmtLL2JnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1KV0ZQVFQ2IiwibWUiOnsiaWQiOiIyNTU2MjQxNDM3Mzk6MzlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPK3k5UUJFTzZ4M0xzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1FczhWWnVrKzBUSkY5VCtkK3dMdytTVkJoVk93MEpqMkVCaTdKK2QrQkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IiszaVozWUttUUFtV1RxVTdlL3FHRThwZHlpYWt1TU5GNlZ2NWgzNjhrcGRpNXFjemJISklPKzlITzRLTGVHTWRSTnozWDNIWXE0T21rdzQ2VHVGYUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwQUFXdUQxMEoyaWRBK2FadmZZUkRKU1JYdHVFSnlvaGRkR0dZRi9pNDVIdTR3ZzFGakVTdVZRcnZzd3g2S3JKcTRGT2hqUWRWSkFSdkRpYnlRbUdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyNDE0MzczOTozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUQkxQRldicFB0RXlSZlUvbmZzQzhQa2xRWVZUc05DWTloQVl1eWZuZmdTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODU4NDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN6cyJ9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
