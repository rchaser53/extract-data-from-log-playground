const fs = require('fs');

const targetStr = "targetStr";
const inputs = fs.readFileSync("path.log", { encoding: "utf8"});
const inputArray = inputs.split("\n");

const outputStr = inputArray.filter((elem) => elem.includes(targetStr));

fs.writeFileSync("output.log", outputStr.join("\n"));
