/**
 * Class allows you to create a 2D vector in cartesean system and gives implementations of 
 * various functionalities on the vector.
 */
export class Vector2D {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Stores the vector representing the coordinates of origin (0,0)
     */
    static origin = new Vector2D(0,0);
    
    /**
     * Reurns the scalar distance between 2 vectors
     * @param {Vector2D} v1 first vector
     * @param {Vector2D} v2 second vector
     * @returns the scalar distance between the two vectors
     */
    static getDist(v1,v2) {
        return Math.sqrt(Math.pow((v1.x-v2.x),2) + Math.pow((v1.y-v2.y),2));
    }

    /**
     * Returns and vector distance between the 2 vectors
     * @param {Vector2D} v1 vector from whom the distance is to be calculated
     * @param {Vector2D} v2 vector to which the distance is to be calculated 
     * @returns a new vector representing the distance vector between given vectors
     */
    static getDistVec2D(v1,v2) {
        return new Vector2D(v2.x-v1.x, v2.y-v1.y);
    }

    /**
     * Multiplies the currecnt scalar with passed scalar value. Updates current vector 
     * and also returns a new vector with mulitplied result
     * @param {number} m scalar quantity to multiply the vector with
     * @returns a new vector created by scalar multiplication of current vecctor with passed arg
     */
    mulScaler(m) {
        this.x *= m;
        this.y *= m;
        return this.copy();
    }

    /**
     * adds a vector to the current vector
     * @param {Vector2D} v vector to be added
     */
    addVec(v) {
        this.x += v.x;
        this.y += v.y;
    }

    /**
     * subtracts a vector from the current vector
     * @param {Vector2D} v subtracts a vector from current vector
     */
    subVec(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    /**
     * used to get a vector with opposite direction but same magnitude as
     * that of current vector
     * @returns a new vector with opposite/negative direction as that 
     * of current vector
     */
    getNegative() {
        return this.mulScaler(-1);
    }

    /**
     * used to create a copy of passed vector. Passed vector is unchanged
     * @param {Vector2D} v creates a copy of passed vector
     * @returns a new vector with same coeffecients as that of passed vector
     */
    static copy(v) {
        return new Vector2D(v.x,v.y);
    }

    /**
     * used to get a copy of current vector
     * @returns new vector which has same coefficients as that of current vector
     */
    copy() {
        return new Vector2D(this.x,this.y);
    }

    /**
     * Modifies the current vector to represent a shift in origin
     * @param {Vector2D} newOrigin Vector representing coordinates of new origin
     */
    shiftOrigin(newOrigin) {
        this.x -= newOrigin.x;
        this.y -= newOrigin.y;
    }
}