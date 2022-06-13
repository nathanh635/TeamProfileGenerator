//include inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

//include all classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
let manager = new Manager();


//set array indexes to 0

let e = 0;
let f = 0;
let engineers = [];
let interns = [];

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
  name: 'office',
},

])
.then((data) => {
manager.name = data.name;
manager.id = data.id;
manager.email = data.email;
manager.office = data.office;
})

  .then(() => {
      //send to main menu

    addTeamMember();
  })
}

function addTeamMember() {
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
  const Engineer = require('./lib/engineer');
    var engineer = new Engineer(data.name, data.id, data.email, data.github)
    engineers.push(engineer);
    e+=1;
    addTeamMember();
})
}

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
  
const Intern = require('./lib/intern');
    var intern = new Intern(data.name, data.id, data.email, data.school)
    interns.push(intern);
    f+=1;
    addTeamMember();
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
    
        

        ${addManagerText(manager)}    ${addEngineerText(engineers)}      ${addInternText(interns)}

          </div>
          </div>
        
    </body>
    </html>
      
  `;
  };

function addEngineerText(engineers) {
  if (e===0) {
    return "";
  } else {
    let text = "";
    for (i=0; i<engineers.length; i++)
  text += `       
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${engineers[i].name}</h5>
<i class="fa fa-glasses"></i><h6 class="card-subtitle level">Engineer</h6>
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

function addInternText(intern) {
  if (f===0) {
    return "";
  } else {
    let text = "";
    for (i=0; i<interns.length; i++)
  text += `      
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${interns[i].name}</h5>
<i class="fa fa-user-graduate"></i><h6 class="card-subtitle level">Intern</h6>
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

function addManagerText(manager) {
  let text = `       
  <div class="card">
  <div class="card-body bg-primary text-white">
<h5 class="card-title name">${manager.name}</h5>
<i class="fa fa-mug-hot"></i><h6 class="card-subtitle level">Manager</h6>
</div>
<div>
<p class="card-text">Employee's ID #: ${manager.id}</p>
<p class="card-text d-inline email">Email: </p><a href="mailto:${manager.email}">${manager.email}</a>
<p class="card-text">Office #: ${manager.office}</p>
</div>
</div>`

return text;
}

  init();