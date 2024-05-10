const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const SVG = require('./lib/svg')

const { Triangle, Circle, Square } = require('./lib/shapes')


const questions = [
    {
        type: 'input',
        name: 'svgText',
        message: 'Enter your text',
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color.'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color.'
    },
    {
        type: 'rawlist',
        name: 'shapeType',
        message: 'Choose the shape of the logo!',
        choices: ['Triangle','Circle', 'Square']
    }
];

function writeToFile() {
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            const svg = new SVG()
            switch (answers.shapeType) {
                case "Square":
                    shape = new Square();
                    svg.renderText(answers.svgText, answers.textColor, 33, 55, 5)
                    break;
                case "Circle":
                    shape = new Circle();
                    svg.renderText(answers.svgText, answers.textColor, 50, 60, 4.8)
                    break;
                default:
                    shape = new Triangle();
                    svg.renderText(answers.svgText, answers.textColor, 50, 70, 2.7)
                    break;
            }
            shape.setColor(answers.shapeColor)

            svg.renderShape(shape)
            return writeFile('./examples/svglogo.svg', svg.renderSvg())
        })
        .then(() => console.log('svg created'))
        .catch((err) => console.log(err))
}
writeToFile();