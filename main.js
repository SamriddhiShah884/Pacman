var pacman, pacmanImg;

var ghost1, ghostImg1;
var ghost2, ghostImg2;

var wall1, wall2, wall3, wall4;
var invisibleSprite1,invisibleSprite2;
var invisibleSprite3,invisibleSprite4;
var lives=3;

var wall5, wall6, wall7, wall8;
var wall9, wall10 ,wall11, wall112;
var wall13, wall14 ,wall15, wall116;

//var sound;
var g1, g1Img;
var g2, g2Img;
var g3, g3Img;


function preload(){
   ghostImg1=loadImage ("ghost1.png");
   ghostImg2=loadImage ("ghost2.png");

   g1Img=loadImage ("ghost3.png");
   g2Img=loadImage ("ghost4.png");
   g3Img=loadImage ("ghost5.png");

   pacmanImg=loadImage("pacman1.png");
  // sound=loadSound("background.mp3");

}

function setup() {
  canvas=createCanvas(displayWidth, displayHeight-117);
  //sound.play();

  pacman=createSprite(20,25,30,30);
  pacman.addImage('abc',pacmanImg );
  pacman.scale=0.015;

  invisibleSprite1=createSprite(100,25,30,30);
  invisibleSprite1.shapeColor="#ffffff00";

  invisibleSprite2=createSprite(1400,25,30,30);
  invisibleSprite2.shapeColor="#ffffff00";

  
  invisibleSprite3=createSprite(50,860,30,30);
  invisibleSprite3.shapeColor="#ffffff00";

  invisibleSprite4=createSprite(1460,860,30,30);
  invisibleSprite4.shapeColor="#ffffff00";

  ghost1=createSprite(150,25,30,30);
  ghost1.addImage('ghost', ghostImg1);
  ghost1.scale=0.05;

  ghost2=createSprite(1420,860,30,30);
  ghost2.addImage('ghost', ghostImg2);
  ghost2.scale=0.06;

  g1=createSprite(400,550,30,30);
  g1.addImage('ghost', g1Img);
  g1.scale=0.15;

  g2=createSprite(400,380,30,30);
  g2.addImage('ghost', g2Img);
  g2.scale=0.075;

  g3=createSprite(400,250,30,30);
  g3.addImage('ghost', g3Img);
  g3.scale=0.15;
  

  wall1=createSprite(723,50,1350,2);
  wall1.shapeColor="blue";

  wall2=createSprite(50,440,2,780);
  wall2.shapeColor="blue";

  wall3=createSprite(750,830,1400,2);
  wall3.shapeColor="blue";

  wall4=createSprite(1450,415,2,730);
  wall4.shapeColor="blue";


  wall5=createSprite(773,100,1350,2);
  wall5.shapeColor="red";

  wall6=createSprite(  1450,440,2,780);
  wall6.shapeColor="green";

  wall7=createSprite(740,780,1280,2);
  wall7.shapeColor="orange";

  wall8=createSprite(100,470,2,620);
  wall8.shapeColor="yellow";


  wall9=createSprite(773,150,1150,2);
  wall9.shapeColor="red";

  wall10=createSprite(  1400,440,2,560);
  wall10.shapeColor="green";

  wall11=createSprite(740,720,1130,2);
  wall11.shapeColor="orange";

  wall12=createSprite(150,430,2,500);
  wall12.shapeColor="yellow";


  g1.velocityX=6;
  g2.velocityX=-6;
  g3.velocityX=4;

  ghost2.velocityX=4;
}

function draw() {
  background(0,0,0);  
  
  
  pacman.collide(wall1);
  pacman.collide(wall2);
  pacman.collide(wall3);
  pacman.collide(wall4);

  g1.bounceOff(wall10);
  g1.bounceOff(wall12);

  g2.bounceOff(wall10);
  g2.bounceOff(wall12);

  g3.bounceOff(wall10);
  g3.bounceOff(wall12);

  ghost1.velocityX=5;
 
  ghost2.bounceOff(invisibleSprite3);
  ghost2.bounceOff(invisibleSprite4);


  ghost1.bounceOff(invisibleSprite1);
  if(ghost1.isTouching(invisibleSprite2)){
    ghost1.x=150;
  }

  if(keyDown ("right")){
    pacman.x=pacman.x+5;


  }
  if(keyDown ("left")){
    pacman.x=pacman.x-5;
  }
   
  if(keyDown ("up")){
    pacman.y=pacman.y-3;
  }
  if(keyDown ("down")){
    pacman.y=pacman.y+3;
  }

  if(pacman.isTouching(ghost1)){
 ghost1.velocityX=0;
 ghost2.velocityX=0;
 //ghost3.velocityX=0;

 g1.velocityX=0;
 g2.velocityX=0;
 g3.velocityX=0;

 textSize(120);
 text ("Game Over", 500, 500);

  }




  if(pacman.isTouching(ghost2)){
    ghost1.velocityX=0;
    ghost2.velocityX=0;
    //ghost3.velocityX=0;
   
    g1.velocityX=0;
    g2.velocityX=0;
    g3.velocityX=0;
   
    textSize(120);
    text ("Game Over", 500, 500);
   
     }



     if(pacman.isTouching(g1)){
      ghost1.velocityX=0;
      ghost2.velocityX=0;
      //ghost3.velocityX=0;
     
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
     
      textSize(120);
      text ("Game Over", 500, 500);
     
       }



       if(pacman.isTouching(g2)){
        ghost1.velocityX=0;
        ghost2.velocityX=0;
        //ghost3.velocityX=0;
       
        g1.velocityX=0;
        g2.velocityX=0;
        g3.velocityX=0;
       
        textSize(120);
        text ("Game Over", 500, 500);
       
         }



         if(pacman.isTouching(g3)){
          ghost1.velocityX=0;
          ghost2.velocityX=0;
          //ghost3.velocityX=0;
         
          g1.velocityX=0;
          g2.velocityX=0;
          g3.velocityX=0;
         
          textSize(120);
          text ("Game Over", 500, 500);
         
           }




  drawSprites();
}

