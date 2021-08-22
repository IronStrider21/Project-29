
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1;
var stone1;
var ball;


function preload()
{

}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,750,1200,50);
	ground2 = new Ground(1000,500,300,25);

	box1 = new Box(900,450,50,50,);
	box2 = new Box(950,450,50,50,);
	box3 = new Box(1000,450,50,50,);
	box4 = new Box(1050,450,50,50,);
	box5 = new Box(1100,450,50,50,);
	box6 = new Box(925,400,50,50,);
	box7 = new Box(975,400,50,50,);
	box8 = new Box(1025,400,50,50,);
	box9 = new Box(1075,400,50,50,);
	box10 = new Box(950,350,50,50,);
	box11 = new Box(1000,350,50,50,);
	box12 = new Box(1050,350,50,50,);
	box13 = new Box(975,300,50,50,);
	box14 = new Box(1025,300,50,50,);
	box15 = new Box(1000,250,50,50,);

	//stone1 = new Stone(200,100,50,50);
ball=Bodies.circle(50,200,20);
World.add(world,ball);

	SlingShot = new SlingShot(this.ball,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  SlingShot.display(); 
//stone1.display();
strokeWeight(3);
        fill(255,0,255)
        ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
 
}


function mouseDragged()
{
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    SlingShot.fly();
}


function keyPressed(){
    if (keyCode === 32){
       SlingShot.attach(this.ball)
    }
}