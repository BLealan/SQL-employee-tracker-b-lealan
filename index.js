const inquirer = require("inquirer");
const fs = require("fs");
const inquirerQuestions = require("./lib/questions.js");
const questions = inquirerQuestions.questions;
const userInput = inquirerQuestions.userInput;

const askQuestions = (data) => inquirer.prompt(questions)
.then(data => {
    const nextQuestion = userInput(data)
})
;

askQuestions();
//async await data answer
//conditional if (data 1= "Exit"){inquirer.prompt(questions)}