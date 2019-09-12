// @ts-check

class Tetromino {

    /**
     *
     * @param {Array.<number[]>} shape
     * @param {Object} color
     * @param {number} color.r
     * @param {number} color.g
     * @param {number} color.b
     * 2d array describing the shape
     * 1 is a square, 0 is space.
     * Input should have this structure:
     * [
     *   [0, 0, 0, 0],
     *   [0, 0, 0, 0],
     *   [0, 0, 0, 0],
     *   [0, 0, 0, 0]
     * ]
     */
    constructor(shape, color) {
        this.shape2d = shape;
        this.color = color;
        this.shape1d = [].concat(...shape);
    }

    // render() {
    // }

    rotate() {

        const n = this.shape2d.length;

        for (let x = 0; x < n / 2; x++) {

            for (let y = x; y < n - x -1; y++) {

                let temp = this.shape2d[x][y];
                this.shape2d[x][y] = this.shape2d[y][n-1-x];
                this.shape2d[y][n-1-x] = this.shape2d[n-1-x][n-1-y];
                this.shape2d[n-1-x][n-1-y] = this.shape2d[n-1-y][x];
                this.shape2d[n-1-y][x] = temp;

            }

        }

    }

    log() {
        console.table(this.shape2d);
    }

}
