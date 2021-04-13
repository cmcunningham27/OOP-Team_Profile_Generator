//requires exported information from the Employee super class
const Employee = require("./Employee");

//sub class for an engineer employee's infomation
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
};

//allows other javascript files access to engineer information
module.exports = Engineer;