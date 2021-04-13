//requires exported information from super class Employee
const Employee = require("../lib/Employee");

//checks that information entered into the Employee super-class will result in the correct output
describe ("Employee", () => {
    it("should create an instance of Employee", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });
    it("should set name, id, and email for employee", () => {
        const name = "Ben";
        const id = 1;
        const email = "stteps@yahoo.com";
        const employee = new Employee(name, id, email);
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });
    describe ("getName", () => {
        it("should return name", () => {
            const name = "Ben";
            const employee = new Employee(name);
            expect(employee.getName(name)).toBe("Ben");
        });
    });
    describe ("getId", () => {
        it("should return a string with a number in it", () => {
            const id = "1";
            const employee = new Employee("Foo", id);
            expect(employee.getId(id)).toBe("1");
        }); 
    })
    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "stteps@yahoo.com";
            const employee = new Employee("Foo", 1, email);
            expect(employee.getEmail()).toBe(email);
        });
    });
    describe("getRole", () => {
        it("Should return Employee", () => {
            const employee = new Employee();
            expect(employee.getRole()).toBe("Employee");
        });
    });
});