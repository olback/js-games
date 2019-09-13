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

