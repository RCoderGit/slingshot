class chain{
    constructor(bodyA,bodyB)
    {
        var op={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness: 0.04
        }
        this.chainObject=Constraint.create(op);
        World.add(world,this.chainObject);
    }
    display()
    {
        strokeWeight(8);
        line(this.chainObject.bodyA.position.x,this.chainObject.bodyA.position.y,this.chainObject.bodyB.position.x,this.chainObject.bodyB.position.y);
    }
}
