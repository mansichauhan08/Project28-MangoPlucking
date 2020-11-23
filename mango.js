class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop()
    }    
}