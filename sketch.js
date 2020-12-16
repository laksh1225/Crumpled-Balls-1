
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObj;
var dustbin;
var ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paperObj = new Paper(1550,650,5)
	ground = new Ground(width/2, 680, width, 20);
	dustbin = new Bin(1200,650);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObj.display();
  ground.display();
  dustbin.display();

  drawSprites();
  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}

