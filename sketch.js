
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var chance = 0;

function preload(){
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1400, 800);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,430,550,600);
	ground = new Ground(700,750,1400,100);
	stone = new Stone(165,600,20);	

	mango1 = new Mango(1100,300,20);
	mango2 = new Mango(940,340,20);
	mango3 = new Mango(1020,200,20);
	mango4 = new Mango(1140,180,20);
	mango5 = new Mango(1250,260,20);
	mango6 = new Mango(1280,350,20);
	mango7 = new Mango(1180,365,20);
	mango8 = new Mango(1015,375,20);

	launcher = new Launcher(stone.body,{x:153,y:592});
}


function draw() {
	background("lavender");
	
	Engine.update(engine);

	push();
	textSize(24);
	noStroke();
	fill("black");
	text("Press Space for second chance", 525,110);
	pop();

	push();
	textSize(24);
	noStroke();
	fill("red");
	text("Chance used : "+ chance, 135,110);
	pop();

	tree.display();

	imageMode(CENTER);
	image(boy,200,650,150,250);

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	launcher.display();

	detectCollision(mango1, stone);
	detectCollision(mango2, stone);
	detectCollision(mango3, stone);
	detectCollision(mango4, stone);
	detectCollision(mango5, stone);
	detectCollision(mango6, stone);
	detectCollision(mango7, stone);
	detectCollision(mango8, stone);

	ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX , y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lmango,lstone){
	mangoPosition = lmango.body.position;
	stonePosition = lstone.body.position;
	var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
	if(distance < lmango.radius + lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		chance++;
		Matter.Body.setPosition(stone.body, {x:153,y:592});
		launcher.attach(stone.body);
	}
}