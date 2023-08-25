const { Circle, Triangle, Square } = require("../lib/shapes.js");

// Create testing suite for render function for Shape classes (shape, shapeColor)  
describe('Shape', () => {
    
    // Test Circle with hex shape color and keyword text color 
    describe("Circle", () => {
        it("should render a light pink circle with black text", () => {
            const shape = new Circle();
            shape.shapeColor = "#ffb6c1";
            shape.color = "black";
            shape.text = "ABC";
            expect(shape.render()).toEqual(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="#ffb6c1" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
        </svg>`
            );
        });
    });
    
    // Test render Triangle with botch hex colors 
    describe("Triangle", () => {
        it("should render a green triangle with blue text", () => {
            const shape = new Triangle();
            shape.shapeColor = "#34eb8c";
            shape.color = "#001694";
            shape.text = "ABC";
            expect(shape.render()).toEqual(
                `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="#34eb8c" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="#001694">ABC</text>
        </svg>`
            );
        });
    });
    
    // Test render Square with keyword shape color and hex text color
    describe("Square", () => {
        it("should render a yellow square with purple text", () => {
            const shape = new Square();
            shape.shapeColor = "yellow";
            shape.color = "#75038a";
            shape.text = "ABC";
            expect(shape.render()).toEqual(
                `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="yellow" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="#75038a">ABC</text>
        </svg>`
            );
        });
    });
});

