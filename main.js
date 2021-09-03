#!/usr/bin/env node
const fs = require('fs');
const path = require("path");
const helpObj = require('./commands/help');
const treeObj = require('./commands/tree');
const organizeObj = require('./commands/organize');

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["json", "js", "md", "docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps"],
    app: ["exe", "dmg", "pkg", "deb"]
}

let inputArr = process.argv.slice(2);
console.log(inputArr);

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
