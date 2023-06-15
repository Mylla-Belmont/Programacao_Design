class Rectangle extends Shape {
    protected P1: Point2D;
    protected P2: Point2D;

    constructor(name: string, p1: Point2D, p2: Point2D) {
        super(name);
        this.P1 = p1;
        this.P2 = p2;
    }

    public inside(point: Point2D): boolean {
        return true;
    }

    public getArea(): number {
        return -1;
    }

    public getPerimeter(): number {
        return -1;
    }

    public toString(): string {
        return this.name + ": P1=" + this.P1.toString + " P2=" + this.P2.toString;
    }
}