/**
 * Utils function to use.
 */

const { readFile } = require("fs/promises");
const path = require("path");

/**
 *
 * @returns The json object of the file in string format.
 */
async function getConfigFile() {
  try {
    const pathFile = path.join(__dirname, "../..", "conf.json");
    const content = await readFile(pathFile, "utf-8");
    return JSON.parse(content.toString());
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getConfigFile };
