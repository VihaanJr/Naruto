var narutoAni, naruto;
var kakashiAni, kakashi;
var sasuke , sasukeAni;
var minato , minatoAni;
var sakura,sakuraAni;
var madara , madaraAni;
var itachi , itachiAni;
var main1 , mainImg1;
var main2 , mainImg2;
var main3 , mainImg3;
var main4 , mainImg4;
var main5 , mainImg5;
var main6 , mainImg6;
var start,startImg;
var bg;
var scroll;
var database;
var playerCount=0 , gameState = 0;
var player, game;
var villainGroup , villainImg , villain;
var gameoverImg;


function preload(){
  narutoAni = loadAnimation("images/Naruto/1.png", "images/Naruto/2.png","images/Naruto/3.png",
                            "images/Naruto/4.png","images/Naruto/5.png" ,"images/Naruto/6.png");

  kakashiAni = loadAnimation("images/Kakashi/11.png","images/Kakashi/22.png","images/Kakashi/33.png",
                              "images/Kakashi/44.png","images/Kakashi/55.png","images/Kakashi/66.png")

  sasukeAni = loadAnimation("images/Sasuke/111.png","images/Sasuke/222.png","images/Sasuke/333.png","images/Sasuke/444.png",
                            "images/Sasuke/555.png","images/Sasuke/666.png","images/Sasuke/777.png","images/Sasuke/888.png")
  
   minatoAni = loadAnimation("images/Minato/1111.png","images/Minato/2222.png","images/Minato/3333.png");        
   
   sakuraAni = loadAnimation("images/Sakura/11111.png","images/Sakura/22222.png","images/Sakura/33333.png",
                              "images/Sakura/44444.png","images/Sakura/55555.png","images/Sakura/66666.png")

    itachiAni = loadAnimation("images/Madara/111111.png","images/Madara/222222.png","images/Madara/333333.png",
                                "images/Madara/444444.png","images/Madara/555555.png","images/Madara/666666.png")

    bgImage = loadImage("images/bbgg.png");

    scroll = loadImage("images/Scroll.png");

    startImg = loadImage("images/pp.png");

    mainImg1 = loadImage("images/Naruto/main.png");

    mainImg2 = loadImage("images/Kakashi/main.png");

    mainImg3 = loadImage("images/Sasuke/main.png");

    mainImg4 = loadImage("images/Minato/main.png");

    mainImag5 = loadImage("images/Sakura/main.png");

    mainImg6 = loadImage("images/Madara/main.png");

    villainImg = loadImage("images/vil.png");

    gameoverImg = loadImage("images/gameover.jpg");
}

function setup(){
  createCanvas(1500, 700);
  database = firebase.database();

  villainGroup = new Group();

  game = new Game();
  game.getState();

  player = new Player();
  player.getCount();

 

  //naruto = createSprite(250,400);
  //naruto.addAnimation("naruto" , narutoAni);
  //naruto.scale = 2;

  //kakashi = createSprite(550,400);
  //kakashi.addAnimation("kakashi",kakashiAni);
  //kakashi.scale = 2;

  //sasuke = createSprite(400,400);
  //sasuke.addAnimation("sasuke",sasukeAni);
  //sasuke.scale=2.5;

  //minato = createSprite(850,400);
  //minato.addAnimation("minato",minatoAni);
  //minato.scale = 2;

  //sakura = createSprite(100,400);
  //sakura.addAnimation("sakura",sakuraAni);
  //sakura.scale = 2;

  //madara = createSprite(700,400);
  //madara.addAnimation("madara",madaraAni);

  //madara.scale = 2;

  
  
}

function draw(){

  if(gameState === 0){
    game.start();
  }
  else if(gameState === 1){
    game.play();
  }



  drawSprites();
}
