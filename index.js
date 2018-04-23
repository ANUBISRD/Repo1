/* models/index.js */

const fs = require("fs");

fs.readdirSync("./")
    .filter(file => file.indexOf("-index") >= 0) //проверката маха файловете без index в името
    .forEach(file => {
        require("./" + file);
    });

console.log(fs.readdirSync("./")) //readdirSync чете имената на файловете в директорията