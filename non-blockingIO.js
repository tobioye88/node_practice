//non blocking IO 
var fs = require("fs");
fs.readFile("simple.txt", (err, data)=>{
    if(err){
        console.log(err);
    }

    console.log(data.toString());
});

console.log("Program Ended");

