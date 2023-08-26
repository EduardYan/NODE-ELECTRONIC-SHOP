/**
 * Principal file for execute the web server.
 */

const express = require("express");
const { getConfigFile } = require("./utils/functions");

const app = express();
const templatesPath = "/public/views/";

//routes
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  return res.sendFile(templatesPath + "index.html", {
    root: __dirname,
  });
});

getConfigFile()
  .then((config) => app.listen(config.PORT, "0.0.0.0"))
  .then(() => getConfigFile())
  .then((config) => console.log(`Server in port ${config.PORT}`))
  .catch((e) => console.log(e));
