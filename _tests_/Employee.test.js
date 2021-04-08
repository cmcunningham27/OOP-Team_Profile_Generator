const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

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
    // it("should set id for employee", () => {
       
    //     const employee = new Employee("Foo", id);
    //     expect(employee.id).toBe(id);
    // });
    // it("should set email for employee", () => {
        
    //     const employee = new Employee(email);
    //     expect(employee.email).toBe(email);
    // })
    describe ("getName", () => {
        it("should return a string with the first letter capitalized", () => {
            const name = "Ben";
            const employee = new Employee(name);
            expect(employee.getName(name)).toBe("Ben");
        });
        it("input without capital returns error message", () => {
            const name = "ben";
            const employee = new Employee(name);
            expect(employee.getName(name)).toBe("Make sure first letter is capitalized");
        });
    });
    describe ("getId", () => {
        it("should return a string with a number in it", () => {
            expect(new Employee.getId("1")).toBeInstanceOf(number);
        });
        it("incorrect input returns error message", () => {
            expect(new Employee.getId("a")).toBe("Make sure type in number");
        }); 
    })
    describe("getEmail", () => {
        it("should return an email", () => {
            expect(new Employee.getEmail("stteps@yahoo.com")).toBe("stteps@yahoo.com");
        });
    });
    describe("getRole", () => {
        it("Should return Employee", () => {
            expect(new Employee.getRole()).toBe("Employee");
        });
    });
});