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
        validate: val => /[a-z0-9]/gi.test(val) ? true: `Must include only letter(s) and number(s)`
    }
];
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

function intro() {
    inquirer    
        .prompt(managerInfo)
        .then((response) => {
            fs.writeFile("./src/Manager.html", `
                <div class="card">
                    <div class="cardHeader bg-primary">
                        <h2 class="cardTitle">${ response.managerName }</h2>
                        <h3 class="cardTitle"><i class="fas fa-mug-hot"></i>Manager</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${ response.managerId }</li>
                            <li class="listItem">Email: ${ response.managerEmail }<a href="mailto:${ response.managerEmail }"></a></li>
                            <li class="listItem">Office number: ${ response.managerOffNum }</li>
                        </ul>
                    </div>
                </div>
            `, (err) =>
                err ? console.log(err) : console.log("Successfully written!")
            );
            fs.readFile("./src/Manager.html", "utf8", function (err, data) {
                if (err) {
                    console.log(err)
                }
                teamMembersArray.push(data.toString());
                console.log(teamMembersArray);
            });
            
            // arrayManager();
            whatNext();
        })
};

function whatNext() {
    inquirer   
        .prompt(nextStep)
        .then((response) => {
            if(response.choices === "Engineer") {
                inquirer
                    .prompt(engineerInfo)
                    .then((response) => {
                        fs.writeFile("./src/Engineer.html", `
                <div class="card">
                    <div class="cardHeader bg-primary">
                        <h2 class="cardTitle">${ response.engineerName }</h2>
                        <h3 class="cardTitle"><i class="fas fa-glasses"></i>Engineer</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${ response.engineerId }</li>
                            <li class="listItem">Email: ${ response.engineerEmail }<a href="mailto:${ response.engineerEmail }"></a></li>
                            <li class="listItem">GitHub: ${ response.engineerGithub }<a href="https://github.com/${ response.engineerGithub }"></a></li>
                        </ul>
                    </div>
                </div>
                        `, (err) =>
                            err ? console.log(err) : console.log("Successfully written!")
                        )
                        fs.readFile("./src/Engineer.html", "utf8", function (err, data) {
                            if (err) {
                                console.log(err)
                            }
                            teamMembersArray.push(data.toString());
                            console.log(teamMembersArray);
                        });
                        whatNext();
                    })
            }
            if(response.choices === "Intern") {
                inquirer
                    .prompt(internInfo)
                    .then((response) => {
                        fs.writeFile("./src/Intern.html", `
                <div class="card">
                    <div class="cardHeader bg-primary">
                        <h2 class="cardTitle">${ response.internName }</h2>
                        <h3 class="cardTitle"><i class="fas fa-user-graduate"></i>Intern</h3>
                    </div>
                    <div class="cardBody bg-muted">
                        <ul class="list">
                            <li class="listItem">ID: ${ response.internId }</li>
                            <li class="listItem">Email: ${ response.internEmail }<a href="mailto:${ response.internEmail }"></a></li>
                            <li class="listItem">School: ${ response.internSchool }</li>
                        </ul>
                    </div>
                </div>
                        `, (err) =>
                            err ? console.log(err) : console.log("Successfully written!")
                        )
                        fs.readFile("./src/Intern.html", "utf8", function (err, data) {
                            if (err) {
                                console.log(err)
                            }
                            teamMembersArray.push(data.toString());
                            console.log(teamMembersArray);
                        });
                        whatNext();
                    })
            }
            createTeam(teamMembersArray);
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
                ${ teamMembersArray.join("") }
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