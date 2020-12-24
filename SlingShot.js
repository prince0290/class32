class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA ,
            pointB : pointB ,
            stiffness : 0.1 ,
            length : 10
        };
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

    }

     fly() {
        this.sling.bodyA=null;
    }

    attach (body){
        this.sling.bodyA=body;  
    }

display(){
    if(this.sling.bodyA){

    var posA = this.sling.bodyA.position;
    var posB = this.pointB;

    image(this.sling1,200,20);
    image(this.sling2,170,20);
    push();
    
    //line(posA.x,posA.y,posB.x,posB.y);
        
        stroke(48,22,8);
        if(posA.x<210){
        strokeWeight(4);
        line(posA.x-20,posA.y,posB.x-10,posB.y);
        line(posA.x-20,posA.y,posB.x+30,posB.y-3);
        image(this.sling3,posA.x-30,posA.y-10,15,30);

        } else {
        strokeWeight(4);
        line(posA.x+25,posA.y,posB.x-10,posB.y);
        line(posA.x+25,posA.y,posB.x+30,posB.y-3);
        image(this.sling3,posA.x+25,posA.y-10,15,30);
        }
        pop();
}
}
}