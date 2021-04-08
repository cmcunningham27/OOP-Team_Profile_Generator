const Employee = require("../lib/Employee");

describe ("Employee", () => {
    it("should create an instance of Employee", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });
    it("should set name for employee", () => {
        expect(employee.name("Ben")).toBe("Ben");
    });
    it("should set id for employee", () => {
        expect(employee.id("1")).toBe("1");
    });
    it("should set email for employee", () => {
        expect(employee.email("stteps@yahoo.com")).toBe("stteps@yahoo.com");
    })
    describe ("getName", () => {
        it("should return a string with the first letter capitalized", () => {
            expect(employee.getName("Ben")).toBe("Ben");
        });
        it("input without capital returns error message", () => {
            expect(employee.getName("ben")).toBe("Make sure first letter is capitalized");
        });
    });
    describe ("getId", () => {
        it("should return a string with a number in it", () => {
            expect(employee.getId("1")).toBeInstanceOf(number);
        });
        it("incorrect input returns error message", () => {
            expect(employee.getId("a")).toBe("Make sure type in number");
        }); 
    })
    describe("getEmail", () => {
        it("should return an email", () => {
            expect(employee.getEmail("stteps@yahoo.com")).toBe("stteps@yahoo.com");
        });
    });
    describe("getRole", () => {
        it("Should return Employee", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });
});