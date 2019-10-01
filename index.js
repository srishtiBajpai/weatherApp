#!/usr/bin/env node
var minimist = require ("minimist")
var ora = require("ora")

//console.log(process.argv.slice(2))   //will show the input in array form from 2nd index


var modifiedArgv =minimist(process.argv.slice(2))
// console.log(modifiedArgv)                      // this will show the input as object in the key value pair
       // node index.js hey its me againto       { _: [ 'hey', 'its', 'me', 'againto' ] }

    //    console.log(modifiedArgv["_"][0])
    //    console.log(modifiedArgv.location)
    //    console.log(modifiedArgv.S)

       // node index.js today --location Mumbai -S 12
// { _: [ 'today' ], location: 'Mumbai', S: 12 }
 //today
//Mumbai
//12
var cmd = modifiedArgv["_"][0]
var forecast = require("./cmds/forecast")
var help = require("./cmds/help")
var today = require("./cmds/today")
var version = require("./cmds/version")
var location= modifiedArgv.location;

 if (cmd=="help"|| cmd== undefined)
{
    help();
}
else if(cmd=="version")
{
    version();
}
else if(cmd=="today")
{
    today()
}
else if(cmd=="forecast")
{
    forecast()
}
else {
    console.log("Wrong Command")
}