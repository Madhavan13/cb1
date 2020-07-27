
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper1;
var box1,box2,box3;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,400,800,20);
	box1 = new Box(600,340,20,100);
	box2 = new Box(665,380,150,20);
	box3 = new Box(730,340,20,100);
	paper1 = new paper(300,360,30,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("255");
  ground.display();
  box1.display();
  box3.display(); 
  box2.display();
  paper1.display();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.Matter.Body,paper1.Matter.Body.position,{x:85,y:-85});

	}
}



