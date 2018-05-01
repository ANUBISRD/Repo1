/* models/index.js */

const fs = require("fs");
console.log(fs.readdirSync("./")) //readdirSync чете имената на файловете в директорията
console.log(__dirname); //Показва пътя към файла

fs.readdirSync("./")
    .filter(file => file.indexOf("-index") >= 0) //проверката маха файловете без index в името
    .forEach(file => {
        require("./" + file);
    });