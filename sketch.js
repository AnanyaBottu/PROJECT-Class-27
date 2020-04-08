const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var box,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
    world = engine.world;
    
    var box_options ={
      isStatic:true
    }

  box=Bodies.rectangle(190,100,200,30,box_options);
  box.shapeColor = "green";
 
  var ball_options ={
    restitution:1.0
  }
  ball = Bodies.circle(190,300,100,ball_options);
      
  
          World.add(world,box);
          World.add(world,ball);

   cons=new Chain(box,ball);


   /*ball.position.x = mouseX;
    ball.position.y = mouseY;*/
  } 

function draw() {
  background(225);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,200,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
line(ball.position.x,ball.position.y,box.position.x,box.position.y);
drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    ball.position.x = mouseX;
    ball.position.y = mouseY;
  }
}