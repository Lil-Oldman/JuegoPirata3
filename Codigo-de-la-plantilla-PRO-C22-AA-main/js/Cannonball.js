class Cannonball {
  constructor(x,y){
    var options = {
        isStatic: true
    }

    this.x = x;
    this.y = y;
    this.radius = 30;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    this.cannonballImg = loadImage("assets/cannonball.png");
    World.add(world,this.body);
  }
  
  display(){
    var xPos, yPos;
    xPos = this.body.position.x;
    yPos = this.body.position.y;
    push();
    imageMode(CENTER);
    image(this.cannonballImg,xPos,yPos,this.radius,this.radius);
    pop();
  }
  shot(){
    var newAngle = cannon.angle;
    newAngle = newAngle*(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.4);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,velocity.x * (180/3.14), velocity.y * (180/3.14));
  }
}

