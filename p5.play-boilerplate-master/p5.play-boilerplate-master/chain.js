class Chain{
    constructor(A,B){
        var options = {
            bodyA:A,stiffness:0.05,
            bodyB:B,length:10
        }
         this.cons = Constraint.create(options);
        World.add(world,this.cons);
        


    }
}
 function display()
{

    line (this.cons.bodyA.position.x,this.cons.bodyA.position.y,this.cons.bodyB.position.x,this.cons.bodyB.position.y); 
    
    
}