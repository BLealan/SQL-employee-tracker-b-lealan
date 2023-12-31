# SQL-employee-tracker-b-lealan

## Description

This task was to create a "content management system" in order for users to view information stored in an associated database. This is to be accessed via the command line.

Following the concept of modularization and separation of concern, the programme is separated into specific files to handle each aspect of the code, thereby increasing readability. 
- The "questions.js" file contains the options for the user's command line as well as handling their responses, calling appropriate functions depending on the input.
- The "schema.sql" file handles the creation of the database and it's associated tables.
- The preparedStatements file has MySQL methods in order to handle the user's input and display or alter the appropriate data.
- The index.js file brings together the files and initialises them for the user. 


## Usage
Firstly, please enter `mysql -u root -p` and type in your SQL password when prompted ????? Then enter `SOURCE db/schema.sql;` in order to create the database that the user will be interacting with. Use `\q` to exit the SQL shell. Now you can run `node index.js` and follow the prompts to view and alter the databases.

## Installation
Please run `npm install` to ensure that ['inquirer'](https://www.npmjs.com/package/inquirer) and ['mysql'](https://www.mysql.com/) will work when running the programme. 

## Sources
- https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
- https://www.npmjs.com/package/inquirer#question
- https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
- https://stackoverflow.com/questions/68170024/keep-repeating-the-prompter-questions-with-inquirer-js-based-on-answer