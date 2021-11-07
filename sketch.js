var ISS, ISSImg;
var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var bg, bgImg;
var hasDocked;

function preload() {
  bgImg = loadImage("spacebg.jpg");
  spacecraftImg1 = loadImage("spacecraft1.png");
  spacecraftImg2 = loadImage("spacecraft2.png");
  spacecraftImg3 = loadImage("spacecraft3.png");
  spacecraftImg4 = loadImage("spacecraft4.png");
  ISSImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,840);

  bg = createSprite(650,410);
  bg.addImage(bgImg);
  bg.scale = 2.1;

  spacecraft = createSprite(Math.round(random(50,450)),Math.round(random(650,750)));
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.26;

  ISS = createSprite(Math.round(random(140,640)),270);
  ISS.addImage(ISSImg);
  ISS.scale = 0.8;
  ISS.setCollider("rectangle",0,0,460,300);
  
}

function draw() {
  background(255,255,255);
  drawSprites();
  if(keyDown("LEFT_ARROw")) {
    spacecraft.x = spacecraft.x - 4;
    spacecraft.addImage(spacecraftImg3);
  }
  if(keyDown("RIGHT_ARROw")) {
    spacecraft.x = spacecraft.x + 4;
    spacecraft.addImage(spacecraftImg4);
  }
  if(keyDown("UP_ARROw")) {
    spacecraft.y = spacecraft.y - 4;
    spacecraft.addImage(spacecraftImg2);
  }
  if(keyDown("DOWN_ARROw")) {
    spacecraft.y = spacecraft.y + 4;
    spacecraft.addImage(spacecraftImg1);
  }
  if(spacecraft.isTouching(ISS)) {
    fill("white");
    textSize(20);
    text("Docking Successfull", 300,500);
  }
}