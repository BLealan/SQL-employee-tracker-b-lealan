const questions = [
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", 
            "Add a department", "Add a role", "Add an employee",
            "Update an employee role"]
    },
    {
        type: "input",
        name: "addDepartment",
        message: "Please type the name of the department you wish to add",
        when: (answers) => answers.userChoice === "Add a department"
    },
    {
        type: "input",
        name: "addRole",
        message: "Please type the name of the role you wish to add",
        when: (answers) => answers.userChoice === "Add a department"
    },
    {
        type: "input",
        name: "addEmployee",
        message: "Please type the name of the employee you wish to add",
        when: (answers) => answers.userChoice === "Add a department"
    },
    {
        type: "input",
        name: "updateEmployeeRole1",
        message: "Please type the employee you wish to update",
        when: (answers) => answers.userChoice === "Add a department"
    },
    {
        type: "input",
        name: "updateEmployeeRole2",
        message: "Please type the new role you wish to assign",
        when: (answers) => answers.updateEmployeeRole1 != null
    },
];

module.exports = questions;