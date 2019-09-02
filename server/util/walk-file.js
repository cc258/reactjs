const fs = require("fs");

const walkFile = function(pathResolve, mime) {
  let files = fs.readdirSync(pathResolve);
  let fileList = {};

  for (let [i, item] of files.entries()) {
    let itemArr = item.split(".");

    let itemMime =
      itemArr.length > 1 ? itemArr[itemArr.length - 1] : "undefined";
    let keyName = item + "";
    if (mime === itemMime) {
      fileList[keyName] = pathResolve + item;
    }
  }
  return fileList;
};

module.exports = walkFile;
