// This file exports 'Triangle', 'Circle', and 'Square'


class Shape {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape{
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape{
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

class Square extends Shape {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="${this.shapeColor}" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };

