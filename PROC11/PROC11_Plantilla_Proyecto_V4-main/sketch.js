var sea, seaImg;
var ship, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(600,600);

  sea = createSprite(50,50);
  sea.addImage("fondo", seaImg);

  ship = createSprite(150,150);
  ship.addAnimation("moviment", shipImg);
  ship.scale = 0.5;
  ship.x = 300;
}

function draw() {
  background("blue");

sea.velocityX = sea.velocityX + 0.1;
  if (sea.x <0) {
    sea.x=sea.with/2;
}
 


 drawSprites();
}