const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const teamMembersArray = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the Manger's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Manager's ID number?",
        name: "managerID",
        validate: val => /[1-9]/i.test(val)
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOffNum",
        validate: val => /[a-z1-9]/gi.test(val)
    }
]);
        // .then((response) => {
        //     fs.writeFile("./src/Manager.html", `
        //     <div class="card">
        //         <div class="cardHeader bg-primary">
        //             <h2 class="cardTitle">${ response.managerName }</h2>
        //             <h3 class="cardTitle"><i class="fas fa-mug-hot"></i>Manager</h3>
        //         </div>
        //         <div class="cardBody bg-muted">
        //             <ul class="list">
        //                 <li class="listItem">ID: ${ response.managerId }</li>
        //                 <li class="listItem">Email: ${ response.managerEmail }<a href="mailto:"></a></li>
        //                 <li class="listItem">Office number: ${ response.managerOffNum }</li>
        //             </ul>
        //         </div>
        //     </div>
        //     `, (err) => error? console.log(err) : console.log("Manager created"))
        // })
// };

const nextStep = {
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
    name: "choices"
};

const engineerInfo = [
    {
        type: "input",
        message: "What is the Engineer's Name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineerId",
        validate: val => /[1-9]/.ignoreCase.test(val)
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "engineerGithub"
    }
];

const internInfo = [
    {
        type: "input",
        message: "What is the Intern's Name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the Intern's ID?",
        name: "internId",
        validate: val => /[1-9]/.ignoreCase.test(val)
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What school does the Intern attend?",
        name: "internSchool"
    }
];

function intro() {
    inquirer    
        .prompt(managerQuestions)
        .then((response) => {
            let manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffNum);
            teamMembersArray.push(manager);
            whatNext();
        })
};

function whatNext() {
    inquirer   
        .prompt(nextStep)
        .then((response) => {
            if(response === "Add an Engineer") {
                inquirer
                    .prompt(engineerInfo)
                    .then((response) => {
                        let engineer = (response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                        teamMembersArray.push(engineer);
                        whatNext();
                    })
            }
            if(response === "Add an Intern") {
                inquirer
                    .prompt(internInfo)
                    .then((response) => {
                        let intern = (response.internName, response.internId, response.internEmail, response.internGithub);
                        teamMembersArray.push(intern);
                        whatNext();
                    })
            }
            createTeam(teamMembersArray);
        })
};

function createTeam() {

}

intro();