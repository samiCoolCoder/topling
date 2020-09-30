const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground,ball;
var box1,box2;





function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
  var groundoption=
{
  isStatic:true
}

box1=new box (700,300,50,50) ;
box2=new box (720,100,50,50);

/*var balloption=
{
  restitution:1.0
}*/
  ground=Bodies.rectangle(400,500,800,20,groundoption)
  World.add(world,ground);
 // ball=Bodies.circle(300,200,20,balloption)
  //World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  box1.display()
  box2.display()
  rectMode(CENTER);
 // ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,800,20);
  //ellipse(ball.position.x,ball.position.y,20,20);

}