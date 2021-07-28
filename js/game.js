class Game{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.input.position(700 ,400);

        this.button = createImg("images/lol.png");
        this.button.position(750, 500);
        this.button.style("width", "70px");
        this.buttonPressed = false;

        this.naruto = createImg("images/Naruto/main.png");
        this.naruto.style("width", "150px");
        this.naruto.position(650,500);

        this.characterPressed = false;

        this.kakashi = createImg("images/Kakashi/main.png");
        this.kakashi.style("width" , "150px");
        this.kakashi.position(400, 500);
      
        this.itachi = createImg("images/Madara/main.png");
        this.itachi.style("width" , "100px");
        this.itachi.position(900 , 300);
      
        this.sasuke = createImg("images/Sasuke/main.png");
        this.sasuke.style("width" , "200px");
        this.sasuke.position(1100, 300);

        this.minato = createImg("images/Minato/main.png");
        this.minato.style("width", "200px")
        this.minato.position(100 , 300);

        this.sakura = createImg("images/Sakura/main.png");
        this.sakura.style("width" , "150px");
        this.sakura.position(1300,300);
     
    }

    getState(){
        //code to read data from database
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }
        
    updateState(state){
        //Code to write data to gameState
        database.ref('/').update({
            gameState: state
        });
    }

    start(){
        if(this.buttonPressed != true){
            this.naruto.hide();
            this.kakashi.hide();
            this.itachi.hide();
            this.sasuke.hide();
            this.minato.hide();
            this.sakura.hide();
            background(scroll);
            fill("black");
            textSize(25);
            text("RULES",700,150);
            fill("black");
            textSize(13)
            text("1)This is an infinite game , first you will enter your name and choose your respective characters and then you will play against the villain ", 400,200);
            fill("black");
            text("2) There will a crowd of villains! Beware! You have to be ready , they are very fast!)",400,250);
            fill("black");
            text("3)If you die , you will have to press ctrl + r to retart",400,300);
            fill("black");
            text("4)You have to press the spacebar to kill the villain!",400,350);
            fill("black")
            textSize(25);
            text("Best Of Luck , Hope You Win! Click the start button below to continue!",400 , 450);

            

            this.button.mousePressed(()=>{
                this.naruto.show();
                this.kakashi.show();
                this.itachi.show();
                this.button.hide();
                this.sasuke.show();
                this.minato.show();
                this.sakura.show();
                playerCount+=1;
                player.index=playerCount;
                player.updateCount(playerCount);
                player.name = this.input.value();
                player.update();
                this.input.hide();
                this.buttonPressed = true;
            })

        }

        else{
            background("white");
            image(bgImage ,-100,-100);
           
            if(!this.characterPressed){
                fill("black");
                textSize(25);
                text("Choose Your Characters!", 700 , 200);
            }
            
            this.naruto.position(650,350);
            this.kakashi.position(400,350);
            this.kakashi.mousePressed(()=>{
                background("white");
                this.kakashi.hide();
                this.itachi.hide();
                this.sasuke.hide();
                this.minato.hide();
                this.sakura.hide();
                this.characterPressed=true;
                kakashi = createSprite(250,600);
                kakashi.addAnimation("kakashi",kakashiAni);
                kakashi.scale = 2;
                this.naruto.hide();
                gameState = 1;
            })
            this.naruto.mousePressed(()=>{
                background("white");
                this.naruto.hide();
                this.itachi.hide();
                this.sasuke.hide();
                this.minato.hide();
                this.sakura.hide();
                this.characterPressed=true;
                naruto = createSprite(250,600);
                naruto.addAnimation("naruto" , narutoAni);
                naruto.scale = 3;
                this.kakashi.hide();
                gameState = 1;
            })

            this.minato.mousePressed(()=>{
                background("white");
                if(keyDown("space")){
                    minato.velocityY = -15;
                }
                this.minato.hide();
                this.kakashi.hide();
                this.naruto.hide();
                this.itachi.hide();
                this.sakura.hide();
                this.sasuke.hide();
                this.characterPressed = true;
                minato = createSprite(250,600);
                minato.addAnimation("minato",minatoAni);
                minato.scale = 3;
                gameState = 1;
            })

            this.itachi.mousePressed(()=>{
                background("white");
                this.kakashi.hide();
                this.naruto.hide();
                this.itachi.hide();
                this.sasuke.hide();
                this.sakura.hide();
                this.minato.hide();
                this.characterPressed=true;
                itachi = createSprite(250,600);
                itachi.addAnimation("itachi",itachiAni);
                itachi.scale = 3;
                gameState = 1;
            })

            this.sasuke.mousePressed(()=>{
                background("white");
                this.kakashi.hide();
                this.itachi.hide();
                this.naruto.hide();
                this.sasuke.hide();
                this.sakura.hide();
                this.minato.hide();
                this.characterPressed=true;
                sasuke = createSprite(250,600);
                sasuke.addAnimation("sasuke",sasukeAni);
                sasuke.scale=3;
                gameState = 1;
            })

            this.sakura.mousePressed(()=>{
                background("white");
                this.kakashi.hide();
                this.itachi.hide();
                this.naruto.hide();
                this.sasuke.hide();
                this.sakura.hide();
                this.minato.hide();
                this.characterPressed=true;
                sakura = createSprite(250,600);
                sakura.addAnimation("sakura",sakuraAni);
                sakura.scale = 3;
                gameState = 1;
            })
        }

        

        //start state of the game
        

    }

    play(){
        //play state of the game
        image(bgImage ,-100,-100);
        if(frameCount%30==0){
            villain = createSprite(1500 , 500);
            villain.addImage(villainImg);
            villain.scale = 3;
            villainGroup.add(villain);
            villain.velocityX = -10;
            villain.lifetime = 150;
        }

        if(keyDown("space")) {
    
            villain.destroy();
        }

        if(villainGroup.isTouching(naruto || sasuke || kakashi || minato || sakura || itachi)) {
            image(gameoverImg ,-100,-100 , 1600 , 1000);
            villainGroup.destroy();
            naruto.destroy();
            sasuke.destroy();
            kakashi.destroy();
            minato.destroy();
            sakura.destroy();
            itachi.destroy();
        }

      
    }

}