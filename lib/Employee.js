class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(name) {
        if (name.charAt(0) === name.charAt(0).toUpperCase()) {
            return this.name;
        }

        return "Make sure first letter is capitalized";
        
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;