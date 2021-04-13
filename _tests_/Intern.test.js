//requires exported information from sub class ntern
const Intern = require("../lib/Intern");

//checks that information entered into the Intern sub-class will result in the correct output
describe ("Intern", () => {
    it("should set school for Intern", () => {
        const school = "UW";
        const intern = new Intern("Foo", 1, "email", school);
        expect(intern.school).toBe(school);
    });
    describe ("getSchool", () => {
        it("should return the school", () => {
            const school = "UW";
            const intern = new Intern("Foo", 1, "email", school);
            expect(intern.getSchool()).toBe(school);
        });
    });
    describe("getRole", () => {
        it("should return Intern", () => {
            const intern = new Intern();
            expect(intern.getRole()).toBe("Intern");
        });
    });
});