const blocks = {
    I: new Block([
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0]
    ], { r: 0, g: 94, b: 94 }),
    J: new Block([
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
    ], { r: 0, g: 0, b: 94 }),
    L: new Block([
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
        [0, 0, 0]
    ], { r: 94, g: 63, b: 0 }),
    O: new Block([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0]
    ], { r: 94, g: 94, b: 0 }),
    S: new Block([
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0]
    ], { r: 0, g: 94, b: 0 }),
    T: new Block([
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
    ], { r: 63, g: 0, b: 94 }),
    Z: new Block([
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
    ], { r: 94, g: 0, b: 0})
}

const size = {
    height: 20,
    width: 10,
    squareSize: 40
}

const grid = [];

function setup() {
    createCanvas(size.width * size.squareSize, size.height * size.squareSize);
    // background(70, 70, 70);
}

function draw() {

    background(70, 70, 70);

    // Draw grid
    stroke(100);
    strokeWeight(1);
    for (let x = 0; x < size.width; x++) {
        line(x * size.squareSize, 0, x * size.squareSize, size.height * size.squareSize);
    }

    for (let y = 0; y < size.height; y++) {
        line(0, y * size.squareSize, size.width * size.squareSize, y * size.squareSize);
    }


}

