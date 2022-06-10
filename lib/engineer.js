//include Employee class
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(githubUsername) {
    this.github = githubUsername;

    //should inherit name, id, and email from employee class

    this.getGithub = () => {
        return this.github;
    };
    this.getRole = () => {
        return "Engineer";
    };
    };
}
module.exports = Engineer;