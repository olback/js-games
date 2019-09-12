// @ts-check

class Block {

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
     *   [0, 0, 0],
     *   [0, 0, 0],
     *   [0, 0, 0],
     *   [0, 0, 0],
     * ]
     */
    constructor(shape, color) {
        this.shape2d = shape;
        this.color = color;
        this.shape1d = [].concat(...shape);
    }

}
