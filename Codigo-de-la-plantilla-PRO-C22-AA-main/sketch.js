const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground;
var cannon, cannonBase;
var cannonBall;

var cannonBallArray = [ "velas", "pastel", "comida", "regalos", "mesas"];
var bulletArr = [];
//Esto es una matriz vv
var mathArray = [[1,2],[3,4],[5,6]];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var angle = 15;
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 105, 170, 170, angle);

  
  
  for(var i = 0; i < cannonBallArray.length; i++){
    console.log(cannonBallArray[i]);
  }
  console.log(mathArray[2]);

  /*
  cannonBallArray.push("Gustavo");
  console.log(cannonBallArray);
  cannonBallArray.push("Tavo");
  console.log(cannonBallArray);
  cannonBallArray.pop();
  console.log(cannonBallArray);
  */
}

function draw() {
  background(189);
  image(backgroundImg,0,0,1200,600);
  
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.display();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  for(var i = 0; i < bulletArr.length; i++){
    
    bulletArr[i].display();
  }
}
/*
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cannonBall = new Cannonball(cannon.x,cannon.y);
    cannonBall.display();
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall, cannon.angle);
    bulletArr.push(cannonBall);

    console.log("Entro a la Funcion KeyPressed");
  }
}
function keyReleased() {
  if(keyCode === LEFT_ARROW){
    
    bulletArr[bulletArr.length-1].shot();
    console.log("Entro a la Funcion KeyReleased")
  }
}
function mostrarBalas(bala,index){
  bala.display();
}*/