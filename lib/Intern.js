//requires exported information from the super class Employee
const Employee = require("./Employee");

//sub class for intern's information
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

//allows other javascript files access to intern information
module.exports = Intern;