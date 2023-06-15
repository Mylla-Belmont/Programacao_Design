class Calc {
    public static distance(a: Point2D, b: Point2D): number {
        let dist1 = Math.pow((b.x - a.x), 2);
        let dist2 = Math.pow((b.y - a.y), 2);
        return Math.sqrt((dist1 + dist2));
    }
}