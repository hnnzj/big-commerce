const express = require("express");
const cors = require("cors");
const { sequelize } = require("./database");
require("dotenv").config();

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/inmuebles", require("./routes/products"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

async function isConnect() {
  try {
    app.listen(port);
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

isConnect();
