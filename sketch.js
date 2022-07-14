const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball;


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(width/2,670,width,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);
  
  var ball_options = {
    isStatic: false,
	restitution: 0.35,
	friction: 0,
	density: 1.2
  }

  ball = Bodies.circle(200,660,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);

  fill("white")

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  left.show();
  right.show();
  keyPressed();
  Engine.update(engine);

  


drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2.5,y:2});
	}


	
  }

