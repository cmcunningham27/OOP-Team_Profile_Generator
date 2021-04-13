//requires exported information from super class employee
const Employee = require("./Employee");

//sub class for manager's information
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
};

//allows other javascript files access to manager's information
module.exports = Manager;