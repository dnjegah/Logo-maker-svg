const { Triangle, Circle, Square } = require('./shapes')

describe('Triangle', () => {
    describe('triangle', () => {
        it('should add blue as the fill color for the shape', () => {
            const shape = new Triangle(); 
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    });
});

describe('Circle', () => {
    describe('circle', () => {
        it('should add yellow as the fill color for the shape', () => {
            const shape = new Circle(); 
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="yellow" />')
        });
    });
});

describe('Square', () => {
    describe('square', () => {
        it('should add red as the fill color for the shape', () => {
            const shape = new Square(); 
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect width="190" height="190" fill="red" />')
        });
    });
});