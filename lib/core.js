const fs = require('fs');
const path = require('path');
const findreplace = require('replace-in-file');

//Rename object key
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );

//Change object key order
function orderKeys(newOrder, oldOrderObj) {
    let newOrderObj = {}
    newOrder.forEach(ele => {
        newOrderObj[ele]= null
    });
    oldOrderObj = Object.assign(newOrderObj, oldOrderObj);
    return oldOrderObj;
}

//Find keys based on value (return an array)
const findKeys = (obj, val) => 
  Object.keys(obj).filter(key => obj[key] === val);

//Create folder based on file path
function createFolder(folderPath){
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true })
        }
    } catch (err) {
        console.error(err)
    }
}

//Clear file content
function clearFileContent(filePath){
    try {
        if (fs.existsSync(filePath)) {
            let options = {
                files: filePath,
                from: /.*/s,
                to: '',
              };
              try {
                findreplace.sync(options);
              }
              catch (err) {
                console.error('Error occurred:', err);
              }
            }
    } catch (err) {
        console.error(err)
    }  
}

module.exports = {
    renameKeys : renameKeys,
    orderKeys : orderKeys,
    findKeys : findKeys,
    createFolder : createFolder,
    clearFileContent : clearFileContent,
}