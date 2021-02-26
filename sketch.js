
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5; 
var chain1, chain2, chain3, chain4, chain5; 
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(250,500,35);
	bob2 = new Bob(320,500,35);
	bob3 = new Bob(390,500,35);
	bob4 = new Bob(460,500,35);
	bob5 = new Bob(530,500,35);

	chain1 = new Chain (bob1.body,roof.body,-bobDiameter*2,0);
	chain2 = new Chain (bob2.body,roof.body,-bobDiameter*2,0); 
	chain3 = new Chain (bob3.body,roof.body,-bobDiameter*2,0);
	chain4 = new Chain (bob4.body,roof.body,-bobDiameter*2,0); 
	chain5 = new Chain (bob5.body,roof.body,-bobDiameter*2,0); 
	
	roof = new Roof(390,150,360,40)

	


	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("light blue");

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

 roof.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000})
	}
	if(keyCode === 50) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000});
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-1000,y:1000});
	}
}




