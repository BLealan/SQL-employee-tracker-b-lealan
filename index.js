const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");

inquirer.prompt(questions)
.then(data => {
    console.log(data)
});