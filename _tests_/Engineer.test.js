const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

describe ("Engineer", () => {
    it("should set github for Engineer", () => {
        const github = "cmcunningham27";
        const engineer = new Engineer("Foo", 1, "email", github);
        expect(engineer.github).toBe(github);
    });
    describe("getGithub", () => {
        it("should return the github user name of the employee", () => {
            const github = "cmcunningham27";
            const engineer = new Engineer("Foo", 1, "email", github);
            expect(engineer.getGithub(github)).toBe(github);
        });
    });
    describe("getRole", () => {
        it("should retunr Engineer", () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});