require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "",
  PREFIX: process.env.PREFIX || ".",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === "true",
  AUTO_DL: process.env.AUTO_DL === "true",
  AUTO_READ: process.env.AUTO_READ === "true",
  AUTO_TYPING: process.env.AUTO_TYPING === "true",
  AUTO_RECORDING: process.env.AUTO_RECORDING === "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === "true",
  AUTO_REACT: process.env.AUTO_REACT === "true",
  AUTO_BLOCK: process.env.AUTO_BLOCK === "true", // auto block only for 212
  REJECT_CALL: process.env.REJECT_CALL === "true",
  NOT_ALLOW: process.env.NOT_ALLOW === "true",
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Nassor-md",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255624143739",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME === "true",
};

module.exports = config;
