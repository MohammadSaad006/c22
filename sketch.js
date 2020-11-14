const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld,ball;
var ground
function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();// world
  myWorld= myEngine.world;

var options ={
  isStatic: true
}
var option1 ={
  restitution:1
}

  ball= Bodies.circle(200,200,20,option1);
  World.add(myWorld,ball)
  console.log(ball.position.x)
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(myWorld,ground)
  
}

function draw() {
  background(0); 

  Engine.update(myEngine)
rectMode(CENTER) 
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
rect(ground.position.x,ground.position.y,400,20)
}