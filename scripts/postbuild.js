const fs = require("fs-extra");
const path = require("path");

function copyPublicFolder() {
  try {
    fs.copySync("./src/views", "./build/views");
    fs.copySync("./src/public", "./build/public");
  } catch (err) {
    console.log("copyPublicFolder errors: ", err);
  }
}

copyPublicFolder();
