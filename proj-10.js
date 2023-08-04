//creating game objects, setting animations and defining variables
var boy;
var obs1, obs2, obs3;
var toyshop;
var fails = 0;
var gameState = "serve";
 boy = createSprite(200, 350);
 boy.setAnimation("boy");
boy.scale=0.2;
 obs1 = createSprite(370,290,20,20);
obs1.setAnimation("car1");
obs1.scale=0.1;
 obs2 = createSprite(30,200,20,20);
obs2.setAnimation("car2");
obs2.scale=0.1;
 obs3 = createSprite(370,120,20,20);
obs3.setAnimation("car3");
obs3.scale=0.1;
 toyshop = createSprite(200,40,20,20);
toyshop.setAnimation("shop");
toyshop.scale=0.8;


createEdgeSprites();

function draw() 
{
  background("lightblue");
  drawSprites();
  
  //bouncing Off objects
  boy.bounceOff(edges);
  obs1.bounceOff(edges);
  obs2.bounceOff(edges);
  obs3.bounceOff(edges);
  
  //showing score
  textSize(20);
  fill("red");
  text("FAILS:"+fails,32,32);
  
  
  if (gameState == "serve")
  {
    textSize(30);
    fill("yellow");
    text("Help the boy reach the toy store",40,200);
    textSize(30);
    fill("yellow");
    text("press space to start",50,230);
    
    if (keyDown("space"))
    {
      obs1.velocityX=-5;
      obs2.velocityX=5;
      obs3.velocityX=-5;
      gameState = "play";
    }
  }
  if (gameState == "play")
  {
    //moving boy with keys
   if (keyDown("UP_ARROW"))
   {
     boy.y = boy.y-4;
   }
   if (keyDown("DOWN_ARROW"))
   {
     boy.y = boy.y+4;
   }
  if (keyDown("RIGHT_ARROW"))
   {
     boy.x = boy.x+4;
   }
   if (keyDown("LEFT_ARROW"))
   {
     boy.x = boy.x-4;
   }
   if (boy.isTouching(obs1) || boy.isTouching(obs2) || boy.isTouching(obs3))
   {
     gameState = "serve";
     fails = fails+1;
     boy.x =200;
     boy.y =350;
     obs1.velocityX=0;
     obs2.velocityX=0;
     obs3.velocityX=0;
   }
   if (boy.isTouching(toyshop))
   {
     gameState = "endtype1";
   }
   if (fails == 5)
   {
     gameState = "endtype2";
   }
  }
  if (gameState == "endtype1")
  {
    textSize(40);
    fill("gold");
    text("YOU WON",50,200);
    obs1.velocityX=0;
     obs2.velocityX=0;
     obs3.velocityX=0;
  }
  if (gameState == "endtype2")
  {
    textSize(40);
    fill("red");
    text("YOU LOST",50,200);
    obs1.velocityX=0;
     obs2.velocityX=0;
     obs3.velocityX=0;
  }
} 