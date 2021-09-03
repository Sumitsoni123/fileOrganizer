function organizefn(dirPath) {
    //console.log("Organize command implemented for", dirPath);
    let destPath;
    if (dirPath == undefined) {
        console.log("Kindly enter dir path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            destPath = path.join(dirPath, "organised_file");
            if (fs.existsSync(destPath) == false)
                fs.mkdirSync(destPath);
        } else {
            console.log("Kindly enter the correct dir path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, des) {
    let childname = fs.readdirSync(src);
    //console.log(childname);
    for (let i = 0; i < childname.length; i++) {
        let childAddress = path.join(src, childname[i]);
        let isFile = fs.lstatSync(childAddress).isFile();

        if (isFile) {
            //console.log(childname[i]);
            let category = getCategory(childname[i]);
            console.log(childname[i], " --->>> ", category);
            sendFiles(childAddress, des, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category) {
    let catPath = path.join(dest, category);
    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath);
    }
    let fileName = path.basename(srcFilePath);
    let desFilePath = path.join(catPath, fileName);
    fs.copyFileSync(srcFilePath, desFilePath);
    fs.unlinkSync(srcFilePath);  // to cut file else just copy 
    console.log(fileName, " copied to ", category);
}


function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    //console.log(ext);
    for (let ty in types) {
        let currArray = types[ty];
        for (let i = 0; i < currArray.length; i++) {
            if (ext == currArray[i])
                return ty;
        }
    }
    return "others";
}

module.exports = {
    organizeKey: organizefn
}