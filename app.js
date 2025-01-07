const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const PORT = config.get("port");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
