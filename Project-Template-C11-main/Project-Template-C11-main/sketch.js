var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png")
  energyImg = loadImage("energyDrink.png")
  powerImg = loadImage("power.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;



}

function draw() {
  background(0);
  path.velocityY = 10;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = 5
    path.y = height/4;
  }



spawnPowerups();
  drawSprites();
}

function spawnPowerups() {
  if (frameCount % 100 === 0) {
  
    powerup = createSprite(200,-30,10,10)
    powerup.velocityY = 4
    var v1 = Math.round(random(1,3))
    switch(v1) {
        case 1:powerup.addImage(powerImg)
        break;
        case 2:powerup.addImage(coinImg)
        break;
        case 3:powerup.addImage(energyImg)
        break;
        default:break
  }
  powerup.scale = .3

}
}
