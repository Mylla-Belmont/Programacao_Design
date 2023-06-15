abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    abstract inside(point: Point2D): boolean;

    abstract getArea(): number;

    abstract getPerimeter(): number;

    abstract toString(): string;
}