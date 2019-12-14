//blocking IO
var fs = require("fs");

var data = fs.readFileSync("simple.txt");
console.log(data.toString());
console.log("Program Ended");
