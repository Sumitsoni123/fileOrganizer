function helpfn() {
    //console.log("Help command implemented for", dirPath);
    console.log(`list of commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help "directoryPath"
    `);
}

module.exports = {
    helpKey: helpfn
}
