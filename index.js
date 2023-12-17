const inquirer = require("inquirer");
const fs = require("fs");
const inquirerQuestions = require("./lib/questions.js");
const questions = inquirerQuestions.questions;
const userInput = inquirerQuestions.userInput;

inquirer.prompt(questions)
.then(data => {
    const nextQuestion = userInput(data)
});
