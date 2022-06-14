//include inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

//include employee class
const Employee = require('./lib/employee');

//set array indexes to 0

let e = 0;
let f = 0;

//set empty arrays of employees
let managers = [];
let engineers = [];
let interns = [];

//set parameters to check ID numbers and make sure there are no duplicates
let idNums = [];
let idUsed = false;

//initialize the program 
function init() {

  //start by requesting manager's info
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
  name: 'officeNumber',
},

])
.then((data) => {
const Manager = require('./lib/manager');
//If I didn't have a global variable for manager, it wasn't accessible in other function blocks of code... so I added it to an array as well
let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
managers.push(manager);
//Add id number to array of id numbers
idNums.push(manager.id);
})

  .then(() => {
      //send to main menu

    addTeamMember();
  })
}

//main menu to add team members
function addTeamMember() {
  //reset idUsed variable so it can catch if more duplicates are identified
  idUsed = false;
  inquirer
.prompt([
{
  type: 'list',
  message: "Add team member: ",
  name: 'teamMember',
  choices: ['Engineer', 'Intern', 'No more team members'],
},
])
.then((data) => {
  //send user to appropriate inquirer block based on response.
if (data.teamMember === "Engineer") {
  addEngineer();
} else if (data.teamMember === "Intern") {
  addIntern();
} else {
  let text = generateMarkdown()
  writeToFile("./dist/index.html",text);
}

});
}

function writeToFile(fileName, text) {
  //generate html document
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Team profile created!')
  )
}

//entering in engineer's information
function addEngineer() {
  inquirer
.prompt([
  {
    type: 'input',
    message: "Engineer's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID#: ",
    name: 'id',
  },
  {
    type: 'input',
    message: "Email: ",
    name: 'email',
  },
  {
      type: 'input',
      message: "Github Username:",
      name: 'github',
    },

])
.then((data) => {

  //check if ID numbers have been duplicated
  for (let i = 0; i< idNums.length; i++) {
    if (data.id == idNums[i]) {
      console.log("ID Number already used; no changes made. Please use a new ID number for the employee.");
      idUsed = true;
    }
  }
  //if ID number was already used, send back to menu. Otherwise, add employee to engineers array and go back to menu.
  if (idUsed ===true) {
    addTeamMember();
  } else {
  const Engineer = require('./lib/engineer');
    var engineer = new Engineer(data.name, data.id, data.email, data.github)

    engineers.push(engineer);
    e+=1;
    addTeamMember();
  }

})
}

//request intern's info
function addIntern() {
  inquirer
.prompt([
  {
    type: 'input',
    message: "Intern's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID#: ",
    name: 'id',
  },
  {
    type: 'input',
    message: "Email: ",
    name: 'email',
  },
  {
      type: 'input',
      message: "School Name:",
      name: 'school',
    },

])
.then((data) => {
    //check if ID numbers have been duplicated
  for (let i = 0; i< idNums.length; i++) {
    if (data.id == idNums[i]) {
      console.log("ID Number already used; no changes made. Please use a new ID number for the employee.");
      idUsed = true;
    }
  }
    //if ID number was already used, send back to menu. Otherwise, add employee to engineers array and go back to menu.
  if (idUsed ===true) {
    addTeamMember();
  } else {
const Intern = require('./lib/intern');
    var intern = new Intern(data.name, data.id, data.email, data.school)
    interns.push(intern);
    f+=1;
    addTeamMember();
  }
})
}

// Create the html document
function generateMarkdown(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
    
        <header>
            <div class="px-4 py-5 text-center bg-danger">
                <h1 class="display-5 fw-bold text-light">My Team</h1>
                </div>
              </div>
        </header>

        <div class="container">
    
        

        ${addManagerText(managers[0])}    ${addEngineerText(engineers)}      ${addInternText(interns)}

          </div>
          </div>
        
    </body>
    </html>
      
  `;
  };

  //add the cards for the engineers, send back a blank string if there are no engineers
function addEngineerText(engineers) {
  if (e===0) {
    return "";
  } else {
    let text = "";
    //loop through the engineers array, adding a card for each one.
    for (i=0; i<engineers.length; i++)
  text += `       
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${engineers[i].name}</h5>
<i class="fa fa-glasses"></i><h6 class="card-subtitle level">${engineers[i].getRole()}</h6>
</div>
<div>
<p class="card-text">Employee's ID #: ${engineers[i].id}</p>
<p class="card-text email d-inline">Email: </p><a href="mailto:${engineers[i].email}">${engineers[i].email}</a>
<div class="d-block engbox">
<p class="card-text d-inline">Github Profile: </p><a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a>
</div>
</div>
</div>`

return text;
}
}

  //add the cards for the interns, send back a blank string if there are no interns
function addInternText(interns) {
  if (f===0) {
    return "";
  } else {
    let text = "";
    for (i=0; i<interns.length; i++)
  text += `      
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${interns[i].name}</h5>
<i class="fa fa-user-graduate"></i><h6 class="card-subtitle level">${interns[i].getRole()}</h6>
</div>
<div>
<p class="card-text">Employee's ID #: ${interns[i].id}</p>
<p class="card-text email d-inline">Email:</p><a href="mailto:${interns[i].email}">${interns[i].email}</a>
<p class="card-text">School: ${interns[i].school}</p>
</div>
</div>`

return text;
}
}

//add the card for the manager
function addManagerText(manager) {
  let text = `       
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${manager.name}</h5>
<i class="fa fa-mug-hot"></i><h6 class="card-subtitle level">${manager.getRole()}</h6>
</div>
<div>
<p class="card-text">Employee's ID #: ${manager.id}</p>
<p class="card-text d-inline email">Email: </p><a href="mailto:${manager.email}">${manager.email}</a>
<p class="card-text">Office #: ${manager.officeNumber}</p>
</div>
</div>`

return text;
}

//run the init command on startup
  init();