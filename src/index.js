/*
 * @Description:
 * @Date: 2023-06-02 16:36:51
 */
let native = require("./native/build/Release/addon.node");
let paths = native.readFilePaths();
console.log(paths);
