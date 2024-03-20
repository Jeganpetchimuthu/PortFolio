const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mailRouter = require("./Router/Mail");
app.use("/api", mailRouter);

const mailsRouter = require("./Router/Mails");
app.use("/api", mailsRouter);

app.get("/", (req, res) => {
  res.send("Hello all welcome!!!!");
});

app.listen(PORT, () => {
  console.log("This Node application is running on port " + PORT);
});
