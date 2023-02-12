const inquirer = require('inquirer'); // inquirer is defined/required so I can have my app ask questions
const fs = require('fs');            // fs is defined/required to write the html team organizing file
const genHTML = require('./lib/genHTMLfile');  // This is the file that uses the information gathered by the inquirer prompt & functions to help populate the new html file that will be generated when you run the app
const Manager = require('./lib/Manager');  // Here we have the objects/constructors that help organize the information input from the user 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');


let teamArray = []; // array to help push new objects made with the constructors 

function organizeTeam () {    // This function encapsulates the rest of the functions(inquirer prompt, file generator, .then, etc ) so all components of the app work together at the same time.   

function init() {
    console.log("Welcome to t the team profile generator!We'll start by adding the project manager!") // this function starts off the app by asking the user their managers info
    addManager();
}
function nextStep(){   // This function asks the user if they want to make a Engineer employee card, Intern  employee card, or to finish and build the team. 
    inquirer.prompt([{
            type: "list",
            name: "next",
            message: "What do you want to do next?",
            choices: ["Intern", "Engineer", "build team"]
    }]).then(function(empInfoadd) {   // this .then function tells the app "where to go" based on the users choice of creating another employee card or being done and building the team
        switch (empInfoadd.next) {   
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;

            default:
                buildHTMLteam();
        }
    })
}
    
function addManager() { // function that asks the user questions.User input is then used to create a new object
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },

        {
            type: "input",
            name: "managerId",
            message: "What's the managers work id number?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's personal email address?"
        },

        {
            type: "input",
            name: "officeNumb",
            message: "What is the manager's work phone number?"
        }
    ]).then(answers => { // this helps create new objects with the information input from the user. the contructors are used for this. 
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumb);
        teamArray.push(manager);
        nextStep(); // this is at the end of each of these funtions that ask specific questions about each new employee the user wishes
                    // to add to there team. This makes it so tha after each new emplyee is made the app asks if the user wants to make a new employee card or be done and build the team ie: make the team html file. 
    });
}
function addEngineer() {  // function that takes user input to help populate Engineer employee card
    inquirer.prompt([
        {
            type: "input",
            name: "engineName",
            message: "What's the engineers name?"
        },

        {
            type: "input",
            name: "engineId",
            message: "What's the engineers work id number?"
        },

        { 
            type: "input",
            name: "engineEmail",
            message: "What's the engineers personal email address?"
        },

        {
            type: "input",
            name: "engineGitHub",
            message: "What's the engineers GitHub username?"
        }
    ]).then(answers => {
        let engineer = new Engineer(answers.engineName, answers.engineId, answers.engineEmail, answers.engineGitHub);
        teamArray.push(engineer); 
        nextStep();
    });

}

    function addIntern() {  // function that takes user input to help populate Intern employee card
    inquirer.prompt([

        {
            type: "input",
            name: "intName",
            message: "What's the interns name?"
        },

        {
            type: "input",
            name: "intId",
            message: "What's the interns work id number?"
        },

        {
            type: "input",
            name: "intEmail",
            message: "What's the interns personal email address?"
        },

        {
            type: "input",
            name: "intSchool",
            message: "What school does the intern go to?"
        }

    ]).then(answers => {
        let intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
        teamArray.push(intern);
        nextStep();
    });
}

    function buildHTMLteam() {  // this function gathers all the users input and writes/generates an html file with employee cards populated with the user input
        fs.writeFileSync('./dist/index.html', genHTML(teamArray)) 
        console.log('You have successfully put together your team!')
    }

   
init();

}
organizeTeam();