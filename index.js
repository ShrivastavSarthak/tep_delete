import "dotenv/config"
import express from "express";
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(process.env.PORT, (re, res) => {
  console.log("listening on port " + port);
});
