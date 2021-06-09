class Launch{
    constructor(bodyA,pointB){
        var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:6

        }
        this.pointB=pointB;
        this.launch=Constraint.create(options)
        World.add(world,this.launch);
    }
display(){
    if(this.launch.bodyA){
        strokeWeight(6);
        line(this.launch.bodyA.position.x,this.launch.bodyA.position.y,this.pointB.x,this.pointB.y);

    }

}
fly(){
    this.launch.bodyA=null
}
attach(bodyA){
this.launch.bodyA=bodyA
}
}