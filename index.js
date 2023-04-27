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
    name: 'credits',
    message: 'Please provide credits for contributing to your project:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter the license for your project:',
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
    - [Credits](#credits)
    - [License](#license)
    - [How to Contribute](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Credits

    ${answers.credits}

    ## License

    This project is licensed under the ${renderLicenseLink(answers.license)} license.

    ## Badges

    This project is licensed under the ${renderLicenseBadge(answers.license)} license.

    ## How to Contribute

    ${answers.contribution}

    ## Tests

    ${answers.tests}

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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    let licenseLink = '';
    switch (license) {
      case 'MIT':
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;
      case 'Apache 2.0':
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GPL 3.0':
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 'BSD 3-Clause':
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
      default:
        licenseLink = '';
    }
    return licenseLink;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

/* Function call to initialize app */
init();
