
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should set office number for Manager", () => {
        const offNum = "1";
        const manager = new Manager("Foo", 1, "email", offNum);
        expect(manager.officeNumber).toBe(offNum);
    });
    describe("getOfficeNumber", () => {
        it("should return the office number", () => {
            const offNum = "1";
            const manager = new Manager("Foo", 1, "email", offNum);
            expect(manager.getOfficeNumber()).toBe(offNum);
        });
    });
    describe("getRole", () => {
        it("should return Manager", () => {
            const manager = new Manager();
            expect(manager.getRole()).toBe("Manager");
        });
    });
});