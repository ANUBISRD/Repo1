// console.log("Hello my first app" + new Date());

const fs = require("fs");
let content = "Some text";
fs.writeFileSync("./new-file.txt", content, "utf8"); //създава нов файл и пише в него