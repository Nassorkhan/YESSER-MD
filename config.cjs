// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhWQ2tYRzhKZ2UvRFBhdGRKRjlpYk54dU0vajROQUliWjFnaTJ2dXduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlBBYnJ0RmF4dGw2T3gxRS8zSi9iM0pjQzh3S2MxSllCajRMdnhnT2xnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTlZQL0xGYUNJMzFsd1lPSzB3V0h0NjBoWHJ1dTJBK0x4MVFCOS9YLzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QWtxeDVEelEvLzU4bUkxRVRUU2ZqMHd3TUhBeXI3c3ZqMVBncFZHekE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOaEtUK1ZOd1FkR3UxQ3R1TUYxU284a0RQNDJteTNXakJyNlJHMFVvMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMSytDQXZ6RVU3QnozUnR2T0hUWjVvdjk2dVFPa1NFMFZjUVZ6emEzVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0dUQ1llWURIVytDT2pZSnVFMFY1STV3d1dyWHN1aHdtL09DS3d1eUQzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkNJL05xVjJnR0VCMTNCZkozdlBnazNrSzNuUG1MaG9CODE1amV4eFFFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvdlNubmpPZEVpejBLL3JpckYxdE5ObDlySS93cTcwWmFQOUx4YktkQksxUG9tL1hKMG9IV3doN3A3TjZzME9ReERmMmJJcWl5c0JxSm9iM3FMNEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJwQVRzTXpUbnZqRkgrY2VURjRRM1FaY3BXTXhFQVR6aVV4eFpzVDdsNHFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqTlpxUnJyU1NaaXQzeGZHcVphTXh3IiwicGhvbmVJZCI6ImNmYjY3NmJlLTViMmItNDA0MS1iYjQ1LTMyNTJmY2FlODI1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVHJKRmxmVzY2V0dYSHBSMk5mcWh4VGZXNEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzRmVjRONjVHcytkb0VTL1J4WWNlbmtLL2JnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1KV0ZQVFQ2IiwibWUiOnsiaWQiOiIyNTU2MjQxNDM3Mzk6MzlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPK3k5UUJFTzZ4M0xzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1FczhWWnVrKzBUSkY5VCtkK3dMdytTVkJoVk93MEpqMkVCaTdKK2QrQkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IiszaVozWUttUUFtV1RxVTdlL3FHRThwZHlpYWt1TU5GNlZ2NWgzNjhrcGRpNXFjemJISklPKzlITzRLTGVHTWRSTnozWDNIWXE0T21rdzQ2VHVGYUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwQUFXdUQxMEoyaWRBK2FadmZZUkRKU1JYdHVFSnlvaGRkR0dZRi9pNDVIdTR3ZzFGakVTdVZRcnZzd3g2S3JKcTRGT2hqUWRWSkFSdkRpYnlRbUdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyNDE0MzczOTozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUQkxQRldicFB0RXlSZlUvbmZzQzhQa2xRWVZUc05DWTloQVl1eWZuZmdTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODU4NDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN6cyJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Nassor-md",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255624143739",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
