class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
      var options = {
        bodyA:bodyA.body.bodies[lastlink],
          bodyB:bodyB,
          length:-10,
          stiffness:0.01
      }
     this.link = Constraint.create(options);
        World.add(world,this.link);
    } 

    dettach()
    {
      World.remove(engine.world,this.link);
     
    }
}