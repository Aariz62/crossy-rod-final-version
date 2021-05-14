var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var city
function preload()
{
 playerImg=loadImage("images/Player-03.png")

 carImg=loadImage("images/car1.png")

 logImg=loadImage("images/log1.png")

 cityImg=loadImage("images/city1.png")




}

function setup() {
  createCanvas(1200,600);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=10; i<6;i++){
  
    var bottomGrass1 =createSprite(600,i,1200,300)
      bottomGrass1.shapecolor="green"
   }
   for(var i=30; i<10;i++)
   var road=createSprite(600,i,1200,300)
      road.shapecolor="black"

   for(var i=0;i<60;i++){
    cars = new Car(2);
    carGroup1.add(cars.spt)
   }
  
   for(var i=0;i<60;i++){
    logs = new Log();
    logGroup1.add(logs.spt)
   }
  
  player = new Player(600,590)
  

   
 }

function draw() {
  background("skyblue");
 
 

 for(i=1;i<logGroup1.length;i++){
 
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width
  }

 }

 for(i=1;i<carGroup1.length;i++){
 
 if(carGroup1[i].x<0)
 {
   carGroup1[i].x=width
 }

}

if(keyDown(RIGHT_ARROW)){
  player.spt.velocityX=6
}

if(keyDown(LEFT_ARROW)){
  player.spt.velocityX=-6
}

if(keyDown(UP_ARROW)){
  player.spt.velocityY=-6
}

if(keyDown(DOWN_ARROW)){
  player.spt.velocityX=0
  player.spt.velocityY=0
}

if(player.spt.isTouching(cars.spt)||player.spt.isTouching(logs.spt)){
  player.spt.destroy()
  Text("GameOver",600,300)
}




 translate(0,-player.spt.y+height-150)


 city=createSprite(width/2,-1500)
 city.addAnimation(cityImg)

  drawSprites();


}

 





