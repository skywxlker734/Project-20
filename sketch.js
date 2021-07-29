function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(800,400);
  bg.addImage(bg);
  
  astronaut = createSprite(300,230);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 
  
  edges = createEdgeSprites();
  astronaut.collide(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addImage(brush);
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.y=300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;    
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.y=250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;    
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking",drink);
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;    
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.y=300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;    
  }

  drawSprites();
  textSize(20);
  fill("white");
  text("Instructions: Up Arrow = Brushing, Down Arrow = Gym, Left Arrow = Eating, Right Arrow = drink, m key = moving",150,150);

}