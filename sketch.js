const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground, paper, dustBin1;



function setup() {
	createCanvas(1350,400);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,1500,20);
    paper=new Paper(70,200);
    dustBin1=new dustBin(1000,340);

	Engine.run(engine);

}


function draw() {

 background("pink");

  ground.display();
  paper.display();
  dustBin1.display();

 drawSprites();

}

function keyPressed(){

  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}