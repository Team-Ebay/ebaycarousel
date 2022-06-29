require("dotenv").config();
const express = require("express");
const pool = require("./database/conn.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/bandanacarousel", async (req, res) => {
  try {
    pool.connect();
    const data = await pool.query("SELECT * FROM chosenbandana;");
    res.json(data.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});
