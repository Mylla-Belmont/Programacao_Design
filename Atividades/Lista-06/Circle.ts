class Circle extends Shape {
    protected center: Point2D;
    protected radius: number;

    constructor(name: string, center: Point2D, radius: number) {
        super(name);
        this.center = center;
        this.radius = radius;
    }

    public inside(point: Point2D): boolean {
        return true;
    }

    public getArea(): number {
        return (3.14 * Math.pow(this.radius, 2));
    }

    public getPerimeter(): number {
        return (2 * 3.14 * this.radius);
    }

    public toString(): string {
        return this.name + ": C=" + this.center.toString + "R=" + this.radius;
    }
}