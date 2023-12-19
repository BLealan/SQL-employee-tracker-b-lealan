const inquirer = require("inquirer");
const fs = require("fs");
const inquirerQuestions = require("./lib/questions.js");
const questions = inquirerQuestions.questions;
const userInput = inquirerQuestions.userInput;
const mysql = require("mysql");

const PORT = process.env.POR || 3001;

const askQuestions = (data) => inquirer.prompt(questions)
    .then(data => {
        const nextQuestion = userInput(data)
    })
    .then((data) => {
        if (data === "Exit"){
        process.exit();
    } else {
        inquirer.prompt(questions)
    }
});

askQuestions();
//async await data answer
//conditional if (data 1= "Exit"){inquirer.prompt(questions)}