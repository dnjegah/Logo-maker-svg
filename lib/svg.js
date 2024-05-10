class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }

    renderSvg() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shapeEl} ${this.textEl} </svg> `
    }

    renderText(message, color, x, y, fontSize) {
        this.textEl = `<text x="${x}%" y="${y}%" text-anchor="middle" font-size="${fontSize}em" fill="${color}">${message}</text>`
    }

    renderShape(shape) {
        this.shapeEl = shape.render();
    }
}

module.exports = SVG;