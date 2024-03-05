export declare class Vector2D {
    
    constructor(x:number,y:number):null;

    static origin: Vector2D;

    static getDist(v1:Vector2D, v2:Vector2D):number;

    static getDistVec2D(v1:Vector2D,v2:Vector2D): Vector2D;

    mulScaler(m:number):Vector2D;

    addVec(v:Vector2D): null;

    subVec(v:Vector2D): null;

    getNegative(): Vector2D;

    static copy(v:Vector2D): Vector2D;

    copy(): Vector2D;

    shiftOrigin(newOrigin:Vector2D):null;
}