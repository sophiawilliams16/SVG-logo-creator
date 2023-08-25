// This file prompts the user through the CLI 

const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { Circle, Triangle, Square } = require('./shapes.js');

class CLI {
    constructor() {
        this.title = '';
        this.questions = []; 
    }
    run() {
        // Prompt user 
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "Enter your text, up to three characters.",
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Choose a shape:",
                    choices: ["Circle", "Triangle", "Square"],
                },
                {
                    type: "input",
                    name: "color",
                    message:
                        "Enter your text color (a color keyword, or a hexadecimal number).",
                },
                {
                    type: "input",
                    name: "shapecolor",
                    message:
                        "Enter your shape color (a color keyword, or a hexadecimal number).",
                },
            ])
            // Write the svg file 
            .then((data) => {
                let path = join(__dirname, "..", "output", "my-logo.svg");
                let shape 
                if (data.shape === 'Circle') {
                    // create a new instance of that class 
                    let circle = new Circle(data.text, data.color, data.shapecolor) 
                    // set shape to whatever class renders 
                    shape = circle.render()
                }
                else if (data.shape === 'Triangle') {
                    let triangle = new Triangle(
                        data.text,
                        data.color,
                        data.shapecolor
                    );
                    shape = triangle.render();
                }
                else if (data.shape === 'Square') {
                    let square = new Square(
                        data.text,
                        data.color,
                        data.shapecolor
                    );
                    shape = square.render();
                }
                    
                return fs.writeFile(path, shape, (err) => {
                    err ? console.log(err.message) : console.log("Success!");
                });
            })
    
    };
}

module.exports = CLI;

