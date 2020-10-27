
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var ground;
var dustbin1;
var paper;
var dustbin2;

function preload()
{
	

	
}

function setup() {
	createCanvas(8000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(780,700,1700,20);
	dustbin2=new Block1(1050,680,120,20);
	dustbin1=new block(1000,640,20,100);


	paper=new Paper(100,600,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);

  paper.display();
ground.display();
dustbin1.display();
dustbin2.display();



  drawSprites();
 
}

function keyPressed(){


	if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:260,y:-260})

	}
}




