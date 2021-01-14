const Engine=Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, sling;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;
	block1 = new Block(300,275,30,40);
	  block2 = new Block(330,275,30,40);
	   block3 = new Block(360,275,30,40);
		block4 = new Block(390,275,30,40);
		 block5 = new Block(420,275,30,40); 
		 block6 = new Block(450,275,30,40);
		  block7 = new Block(480,275,30,40);
		   block8 = new Block(330,235,30,40);
			block9 = new Block(360,235,30,40);
			 block10 = new Block(390,235,30,40);
			  block11 = new Block(420,235,30,40);
			   block12 = new Block(450,235,30,40)
			   polygon= new Polygon(350,200,20,20)
			   sling = new SlingShot(polygon.body,{x:200, y:50});
}

function draw() {
	rectMode(CENTER);
	background(0);
	
	drawSprites();
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 polygon.display()
sling.display()
  
  
  
  }
  function mouseDragged(){
  
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

    }
  
  function mouseReleased(){
    sling.fly();
}