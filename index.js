// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter any installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for using your project:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide guidelines for contributing to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide any test instructions for your project:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter the license for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {

  const fs = require('fs');
  const readmeTemplate = `
    # ${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution Guidelines](#contribution-guidelines)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Contribution Guidelines

    ${answers.contribution}

    ## Tests

    ${answers.tests}

    ## License

    This project is licensed under the ${answers.license} license.

    ## Questions

    If you have any questions, you can reach me through GitHub or email:

    - GitHub: [${answers.github}](https://github.com/${answers.github})
    - Email: ${answers.email}
        `;
  
  /* write a readme file using readme template */
  fs.writeFile(fileName, readmeTemplate, 
    (err) => err ? console.error(err) : 
    console.log('README.md generated!'));
}

// TODO: Create a function to initialize app
/* using Inquirer.js generate a bunch of questions in the commandline */
function init() {
  const inquirer = require('inquirer');

  inquirer
    .prompt(questions)
    .then(answers => writeToFile('README.md', answers));
}

/* Function call to initialize app */
init();
