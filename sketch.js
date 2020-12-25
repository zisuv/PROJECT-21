var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(223,321);
 thickness = random(22,83);
 weight = random(30,52);
 bullet = createSprite(50,200,50,30);
 wall=createSprite(1200,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color("red");
      stroke("red");
      fill("red");
      textSize(20);
      text("THIS WALL IS REJECTED ",200,240);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
      stroke("green");
      fill("green");
      textSize(20);
      text("THIS WALL IS SELECTED ",200,240);
    }
  }
    drawSprites();
}