 var steve,steve_running,stopImage;

 var platform,platformImage;


 function preload() {
    steve_running = loadAnimation("steve.png","steve(2).png");
    stopImage = loadImage("stop.png");
    platformImage = loadImage("green.png");

 }

 function setup () {
  createCanvas(800,800);

   steve = createSprite(200,200);
   steve.addImage(stopImage);
   steve.scale=0.5;

   platform = createSprite(400,650);
   platform.addImage(platformImage);
   platform.scale-5.5;


 }

 function draw () {
  background(25);
 
 


  drawSprites();
  
 }