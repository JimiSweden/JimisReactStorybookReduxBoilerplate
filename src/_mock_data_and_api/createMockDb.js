/**
 * this is run before api in script "prestart:api"
 * by convention a script named "pre" + "name of other script" will be run before that script.
 * so, "prestart:api" will run before "start:api" automatically
 */
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");


const {
  myDummyObjects
} = mockData;

//stringify needed for writing to file
const data = JSON.stringify({
  myDummyObjects
});

const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
