const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { codeModel } = require("./model/codeModel");
const moment = require("moment");
const { validate } = require("./middlewares/vadidate");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/codes", async (req, res) => {
  const alphanumericChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let generateCode = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
    generateCode += alphanumericChars.charAt(randomIndex);
  }
  const time = moment();

  // console.log(generateCode);
  const code = new codeModel({
    code: generateCode,
    created_at: time
  });
  // await code.save();

  res.send({ msg: "code has been generated", code: code });
});

app.post("/api/codes/use", validate, async (req, res) => {
  const { code, created_at } = req.body;
  const allCodes = await codeModel.findOne({ code: code });
  if (allCodes) {
    res.send({ error: "This code has already been used" });
  } else {
    const codeData = new codeModel({
      code,
      created_at
    });
    await codeData.save();
    res.send({ msg: "Code is correct" });
  }
});

const PORT = process.env.PORT || 6060;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("err:", err);
  }
});
