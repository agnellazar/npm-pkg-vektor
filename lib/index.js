export class Vector2D {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static origin = new Vector2D(0,0);
    static getDist(v1,v2) {
        return Math.sqrt(Math.pow((v1.x-v2.x),2) + Math.pow((v1.y-v2.y),2));
    }

    static getDistVec2D(v1,v2) {
        return new Vector2D(v2.x-v1.x, v2.y-v1.y);
    }

    mulScaler(m) {
        this.x *= m;
        this.y *= m;
        return this.copy();
    }


    addVec(v) {
        this.x += v.x;
        this.y += v.y;
    }

    subVec(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    getNegative() {
        return this.mulScaler(-1);
    }

    static copy(v) {
        return new Vector2D(v.x,v.y);
    }

    copy() {
        return new Vector2D(this.x,this.y);
    }
    shiftOrigin(newOrigin) {
        this.x -= newOrigin.x;
        this.y -= newOrigin.y;
    }
}