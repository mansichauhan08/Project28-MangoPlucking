class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic : false
        }
        this.image = loadImage("images/tree.png");
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        //World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}