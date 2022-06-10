//include inquirer package
const inquirer = require('inquirer');


function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.email;
    };
    this.getRole = () => {
        return "Employee";
    };

}

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