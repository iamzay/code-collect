// inheritance prior to es6
function Rectange(length, width) {
    this.length = length
    this.width = width
}

Rectange.prototype.getArea = function() {
    return this.length * this.width
}

function Square(length) {
    return Rectange.call(this, length, length)
} 

Square.prototype = Object.create(Rectange.prototype, {
    constructor: {
        value: Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
})

const square = new Square(3)

console.log(square instanceof Rectange)