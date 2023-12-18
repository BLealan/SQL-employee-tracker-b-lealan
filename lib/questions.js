const inquirer = require("inquirer");
const preparedStatements = require("./preparedStatements.js");
const { viewDepartment } = require("./preparedStatements.js");

const questions = [
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", 
            "Add a department", "Add a role", "Add an employee",
            "Update an employee role", "EXIT"]
    }];

let userInput = (data) => {
    //Switch statement to compare user input to values
    switch(data.userChoice){
    case "View all departments":
        viewDepartment;    
        break;
    case "View all roles":
        // Execute SQL function
        break;
    case "View all employees":
        // Execute SQL function
        break;
    case "Add a department":
        inquirer.prompt([
            {
                type: "input",
                name: "addDepartment",
                message: "Please type the name of the department you wish to add",
            },
        ])
        // Execute SQL function
        break;
    case "Add a role":
        {inquirer.prompt([
            {
                type: "input",
                name: "addRole",
                message: "Please type the name of the role you wish to add",
            },])}
        // Execute SQL function
        break;
    case "Add an employee":
        inquirer.prompt([
            {
                type: "input",
                name: "addEmployee",
                message: "Please type the name of the employee you wish to add",
            },
        ])
        // Execute SQL function
        break;
    case "Update an employee role":
        // Execute SQL function
        break;
    case "Exit":
        break;
    default:
        console.log(`Error, please run "node index.js again.`);
    }
    return "";
// .then((answer) => {
//     if (true) {
//         process.exit();
//     }
// });
}
//Repeat until exit - if (data) === "Exit"

module.exports = {
    questions,
    userInput
};