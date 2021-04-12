const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const teamMembersArray = [];

const managerInfo = [
    {
        type: "input",
        message: "What is the Manger's name?",
        name: "managerName",
        validate: val => val.charAt(0) === val.charAt(0).toUpperCase() ? true : `Must begin with a capital letter`
    },
    {
        type: "input",
        message: "What is the Manager's ID number?",
        name: "managerId",
        validate: val => /[0-9]/i.test(val) ? true : `Must be a number`
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail",
        validate: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) ? true : `Must be a valid email`
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOffNum",
        validate: val => /[a-z0-9]/gi.test(val) ? true : `Must include only letter(s) and number(s)`
    }
];


const nextStep = {
    type: "list",
    message: "Would you like to add another team member or finish building?",
    choices: ["Engineer", "Intern", "Finish building my team"],
    name: "choices"
};

const engineerInfo = [
    {
        type: "input",
        message: "What is the Engineer's Name?",
        name: "engineerName",
        validate: val => val.charAt(0) === val.charAt(0).toUpperCase() ? true : `Must begin with a capital letter`
    },
    {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineerId",
        validate: val => /[0-9]/i.test(val) ? true : `Must be a number`
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
        validate: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) ? true : `Must be a valid email`
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
        name: "internName",
        validate: val => val.charAt(0) === val.charAt(0).toUpperCase() ? true : `Must begin with a capital letter`
    },
    {
        type: "input",
        message: "What is the Intern's ID?",
        name: "internId",
        validate: val => /[0-9]/i.test(val) ? true : `Must be a number`
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
        validate: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) ? true : `Must be a valid email`
    },
    {
        type: "input",
        message: "What school does the Intern attend?",
        name: "internSchool",
        validate: val => val.charAt(0) === val.charAt(0).toUpperCase() ? true : `Must begin with a capital letter`
    }
];

function createManagerCard(manager) {
    return `
                <div class="card m-3">
                    <div class="cardHeader bg-primary text-light">
                        <h2 class="cardTitle">${manager.getName()}</h2>
                        <h3 class="cardTitle"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${manager.getId()}</li>
                            <li class="listItem">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="listItem">Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
    `
};

function intro() {
    inquirer
        .prompt(managerInfo)
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffNum);
            const managerCard = createManagerCard(manager);
                teamMembersArray.push(managerCard);
                console.log(teamMembersArray);
                whatNext();
        });
};

function createEngineerCards(engineer) {
    return `
                <div class="card m-3">
                    <div class="cardHeader bg-primary text-light">
                        <h2 class="cardTitle">${engineer.getName()}</h2>
                        <h3 class="cardTitle"><i class="fas fa-glasses"></i>${ engineer.getRole() }</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${engineer.getId()}</li>
                            <li class="listItem">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="listItem">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div> 
    `
};

function createInternCards(intern) {
    return `
                <div class="card m-3">
                    <div class="cardHeader bg-primary text-light">
                        <h2 class="cardTitle">${intern.getName()}</h2>
                        <h3 class="cardTitle"><i class="fas fa-glasses"></i>${ intern.getRole() }</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${intern.getId()}</li>
                            <li class="listItem">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="listItem">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div> 
    `
};

function whatNext() {
    inquirer
        .prompt(nextStep)
        .then((response) => {
            if (response.choices === "Engineer") {
                inquirer
                    .prompt(engineerInfo)
                    .then((response) => {
                        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                        const engineerCard = createEngineerCards(engineer);
                        teamMembersArray.push(engineerCard);
                        whatNext();
                    });
            }
            if (response.choices === "Intern") {
                inquirer
                    .prompt(internInfo)
                    .then((response) => {
                        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                        const internCard = createInternCards(intern);
                        teamMembersArray.push(internCard);
                        whatNext();
                    });
            }
            if (response.choices === "Finish building my team") {
                createTeam(teamMembersArray);
            }
        })
};

function createTeam() {
    fs.writeFile("./dist/index.html", `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/style.css"/>
    <title>Team Profile</title>
</head>
    
<body>
    
    <div class="containerFluid">
        <div class="row">
            <div class="col-12 jumbotron bg-danger text-light text-center">
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="team col-12 d-flex flex-wrap justify-content-center">
                ${teamMembersArray.join("")}
            </div>
        </div>
    </div>
    
</body>
    
</html>
    `, (err) => {
        err ? console.log(err) : console.log("Created HTML Successfully!")
    });
}

intro();