/**
 * Principal file for execute the web server.
 */

const express = require("express");
const { getConfigFile } = require("./src/utils/functions");

const app = express();

//template route
const templatesPath = "/src/public/views/";

//routes
app.use("/public", express.static(__dirname + "/src/public"));

app.get("/", (req, res) => {
  return res.sendFile(templatesPath + "index.html", {
    root: __dirname,
  });
});

getConfigFile()
  .then((config) => app.listen(process.env.PORT || config.PORT, "0.0.0.0"))
  .then(() => getConfigFile())
  .then((config) => console.log(`Server in port ${config.PORT}`))
  .catch((e) => console.log(e));
