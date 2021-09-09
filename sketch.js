
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var base;
var right;
var left;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	base =new ground(200,800,1500,10);
	right = new ground(520,790,10,200);
	left = new ground(670,790,10,200);
	var balloptions ={
		isStatic: false,
		friction:0,
		density:1.2,
		restitution:0.3
	}
	
  
	ball=Bodies.circle(70,50,20,balloptions)
	World.add(world,ball);
	  rectMode(CENTER);
	  ellipseMode(RADIUS);
	 
	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 base.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
 //keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
    if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:50,y:-85})}
}


