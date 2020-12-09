const inquirer = requier("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
{
        type: "input"
        name: "title"
        message: "Enter project title here"
  
    }
    {
        type: "input",
        name: "description",
        message: "Please describe the projectand what it does"
  
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install the app?"
  
    },
    {
        type: "input",
        name:"usage",
        message:"after intalled, how do you use the app",
  
    },
    {
        type: "input",
        name: "contributors",
        message: "list all who contributed on the project",
  
    },
    {
        type: "input", 
        name: "license", 
        message: "chose the License",
        options: [
            "MIT",
            "APACHE 2.0",
            "none"
        ]
  
    }
    {
        type: "input", 
        name: "GitHub",
        message:"enter your Github link and profile"
  
    }
    {
        type: "input", 
        name: "questions",
        message: "If you have any further questions, enter your email"
  
    }


];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answer => {
        const response = generateMarkdown(answer);
        fs.writeFile("./README.md, response");
    })

}

// function call to initialize program
init();
