var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie , zombieImg, zombies
var bullet,bulletImg,bullets

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bullet.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)

zombies = new Group();
bullets = new Group();

}



function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
  createBullets();
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnZombies()
drawSprites();

}

function spawnZombies(){
if(frameCount%200===0){
zombie = createSprite(windowWidth,random(100,windowHeight-100),100,100)
zombie.addImage(zombieImg)
zombie.scale = 0.1;
zombie.velocityX = -1
zombies.add(zombie)  
}


}
function createBullets(){
var bullet = createSprite(player.x+5,player.y-22,10,10)
bullet.velocityX = +25
bullet.addImage(bulletImg)
bullet.scale = 0.05;
bullets.add(bullet)
}


