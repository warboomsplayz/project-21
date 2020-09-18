var bullet,wall;
var speed,weight,damage,thickness;
function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,10,5);
bullet.shapeColor = '#FFCC00';
wall = createSprite(1575,200,80,400);
wall.shapeColor = '#404040';
weight = random(30,52);
speed = random(223,321)
thickness = random(22,83)
damage = 0.5*weight*speed*speed/thickness*thickness*thickness
bullet.velocityX = 40
}
function draw() {
  background(0,0,0);  
 if(frameCount > 36){
 
 
text (damage,200,100)
 text ("damage:",130,100)

bullet.velocityX = 0

if (damage >50000000){
wall.shapeColor = '#FF0000';

}
if (damage < 50000000){
wall.shapeColor = '#00FF00';

}
 }
text (speed,200,80)
 text ("speed:",150,80)
 text (weight,200,60)
 text ("weght:",150,60)


 drawSprites();
}





