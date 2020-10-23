var monkey, monkey_running;
var banana, bananaImg, obstacle, obstacleImg;
var bananaGroup, obstacleGroup;
var survivalTime = 0;

function preload() {
  
  createCanvas(600, 600);

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");

}



function setup() {


  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -5;
  
  console.log(ground.x);

  monkey = createSprite(80, 315, 20, 20);

  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  // monkey.lifetime = 1;
  //monkey.velocityX = 5;
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  


}


function draw() {
    background(255);

  if (keyWentDown("space")) {
    monkey.velocityY = -5;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  
  if (frameCount % 80 === 0) {
    bananaSpawn();
  }

  score();

  if (frameCount % 300 === 0) {
    obstacles();
  }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(invisibleGround);
  drawSprites();
}



function score() {
  //stroke("white");
  //textSize(20);
  //fill("white");
  //text("score: " + score, 500, 50)
 
  //stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("survivalTime: " + survivalTime, 100, 50);
}

function bananaSpawn() {
  banana = createSprite(400, 120);
  banana.y =  Math.round(random(120,200));
  banana.addImage(bananaImg);
  banana.velocityX = -5;
  banana.lifetime = 300;
  banana.scale = 0.1;
  bananaGroup.add(banana);
}

function obstacles() {
  obstacle = createSprite(300, 330);
  obstacle.lifetime = 100;
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacleGroup.add(obstacle);
}