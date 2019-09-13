// @ts-check

class Tetromino {

    /**
     *
     * @param {string} shape
     * Shapes: I, J, L, O, S, T, Z
     */
    constructor(shape) {

        // Shapes: I, J, L, O, S, T, Z
        switch(shape) {

            case 'I': {
                this.shape2d = [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ];
                this.color = { r: 0, g: 94, b: 94 };
                break;
            }

            case 'J': {
                this.shape2d = [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 0, g: 0, b: 94 };
                break;
            }


            case 'L': {
                this.shape2d = [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 94, g: 63, b: 0 };
                break;
            }

            case 'O': {
                this.shape2d = [
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 94, g: 94, b: 0 };
                break;
            }

            case 'S': {
                this.shape2d = [
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 0, g: 94, b: 0 };
                break;
            }

            case 'T': {
                this.shape2d = [
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 63, g: 0, b: 94 };
                break;
            }

            case 'Z': {
                this.shape2d = [
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ];
                this.color = { r: 94, g: 0, b: 0};
                break;
            }

            default: {
                throw new Error(`${shape} is not a valid shape`);
            }

        }

        this.shape1d = [].concat(...this.shape2d);

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
