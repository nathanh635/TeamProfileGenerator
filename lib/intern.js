//include Employee class
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
    this.school = school;

    //should inherit name, id, and email from employee class

    this.getSchool = () => {
        return this.school;
    };
    this.getRole = () => {
        return "Intern";
    };
    };
}
module.exports = Intern;