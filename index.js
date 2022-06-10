//include inquirer package
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
    ## Installation
  
    ${data.installation}
  
    ## Usage
  
    ${data.usage}
  
    ## License
  
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    
  
    ## Contributing
  
    ${data.contribution}
  
    ## Tests
  
    ${data.testing}
  
    ## Questions
  
    You can reach me at GitHub; my username is ${data.username} and my profile is here: https://github.com/${data.username}. 
    You can also email me at ${data.email}. 
    
  
  `;
  };

  function init() {

      //initialize the inquirer module and ask questions
      console.log("Please enter your team manager's information.")
inquirer
.prompt([
  {
    type: 'input',
    message: "Manager's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID#: ",
    name: 'id',
  },
  {
    type: 'input',
    message: "Manager's email: ",
    name: 'email',
  },
  {
      type: 'input',
      message: "Office number:",
      name: 'office',
    },

])
.then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.office)

}
);
  }

  init();