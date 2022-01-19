#!/usr/bin/env node             // this is sheban syntax to make cmd global 
const fs = require('fs');
const path = require("path");
const helpObj = require('./commands/help');
const treeObj = require('./commands/tree');
const organizeObj = require('./commands/organize');

let inputArr = process.argv.slice(2);
console.log(inputArr);

//              [2]    [3]
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help


let command = inputArr[0];  //node main.js tree "directoryPath"
switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("👀 please input proper command");
        break;
}
