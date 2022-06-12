//include inquirer package
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
    this.officeNumber = officeNumber;

    //should inherit name, id, and email from employee class

    this.getOfficeNumber = () => {
        return this.officeNumber;
    };
    this.getRole = () => {
        return "Manager";
    };
    };
}
module.exports = Manager;