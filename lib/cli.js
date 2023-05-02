const inquirer = require('inquirer');
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function (value) {
          if (value.length > 3) {
            return 'Please enter up to three characters'; //43:12
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape type:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:',
      },
    ])
  }
}


