var home, homeImage;
var gameState = "home";
var man, manImg;
var ground;
var background, backgroundImg;
var help1Img;
var yes1, yes1Img;
var no1, no1Img;
var soifa;
var cardboard1;
var cardboard2;
var cardboard3;
//var cardboard4;
var cardboard5;
var cardboard6;
var cardboard7;
var cardboard8;
var cardboard9;
var cardboard10;
var cardboard11;
var cardboard12;
var cardboard13;
var cardboard14;
var cardboard15;
var cardboard16;
var cardboard17;
var cardboard18;
var cardboard19;
var cardboard20;

var edges



function preload() {
    homeImage = loadImage("images/home.png")
    manImg = loadImage("images/man.png")
    background1Img = loadImage("images/background.jpg")
    help1Img = loadImage("images/help1.jpg")
    yes1Img = loadImage("images/yes1.webp")
    no1Img = loadImage("images/no.webp")
    soifaImg = loadImage("images/soifa.png")

}

function setup() {
    createCanvas(1400, 750)

    home = createSprite(800, 500, width, height)
    home.addImage("starting screen", homeImage)

    ground = createSprite(400, 350, 800, 10);
    ground.x = ground.width / 2;
    ground.visible = false;

    background1 = createSprite(800, 200, 10, 10);
    background1.addImage("b1", background1Img)
    background.visible = true;

    man = createSprite(400, 650)
    man.addImage("player", manImg)
    man.scale = 0.1
    //man.debug=true

    help1 = createSprite(1000, 550)
    help1.addImage("h1", help1Img)
    help1.scale = 0.2

    yes1 = createSprite(1200, 500);
    yes1.addImage("y1", yes1Img)
    yes1.scale = 0.1

    soifa = createSprite(20, 25, 5, 5);
//    soifa.addImage("help", manImg)
//     soifa.scale = 0.1
    soifa.shapeColor = "yellow"
    

    cardboard1 = createSprite(10, 70, 100, 20);
    cardboard1.shapeColor = "brown";

    cardboard2 = createSprite(100, 50, 20, 100);
    cardboard2.shapeColor = "brown";
    cardboard3 = createSprite(90, 130, 100, 20);
    cardboard3.shapeColor = "brown";
    cardboard5 = createSprite(20, 250, 70, 20);
    cardboard5.shapeColor = "brown";
    cardboard6 = createSprite(150, 100, 20, 100);
    cardboard6.shapeColor = "brown";
    cardboard7 = createSprite(200, 50, 20, 100);
    cardboard7.shapeColor = "brown";
    cardboard8 = createSprite(200, 150, 90, 20);
    cardboard8.shapeColor = "brown";
    cardboard9 = createSprite(250, 130, 20, 100);
    cardboard9.shapeColor = "brown";
    cardboard10 = createSprite(250, 50, 100, 20);
    cardboard10.shapeColor = "brown";
    cardboard11 = createSprite(300, 100, 20, 100);
    cardboard11.shapeColor = "brown";
    cardboard12 = createSprite(300, 200, 20, 100);
    cardboard12.shapeColor = "brown";
    cardboard13 = createSprite(300, 350, 20, 100);
    cardboard13.shapeColor = "brown";
    cardboard14 = createSprite(250, 230, 100, 20);
    cardboard14.shapeColor = "brown";
    cardboard15 = createSprite(150, 230, 100, 20);
    cardboard15.shapeColor = "brown";
    cardboard16 = createSprite(100, 300, 20, 120);
    cardboard16.shapeColor = "brown";
    cardboard17 = createSprite(35, 200, 20, 120);
    cardboard17.shapeColor = "brown";
    cardboard18 = createSprite(100, 300, 20, 120);
    cardboard18.shapeColor = "brown";
    cardboard19 = createSprite(150, 350, 120, 20);
    cardboard19.shapeColor = "brown";
    cardboard20 = createSprite(225, 350, 60, 20);
    cardboard20.shapeColor = "brown";

    cup = createSprite(380, 390, 20, 120);
    cup.shapeColor = "yellow";


}

function draw() {


    if (gameState === "home") {
        background("black")
        home.visible = true

        man.visible = false;
        background1.visible = false;
        help1.visible = false
        yes1.visible = false;

        // console.log(soifa);
        soifa.visible = false;


      
        cardboard1.visible = false;
        cardboard2.visible = false;
        cardboard3.visible = false;
        //cardboard4.visible=false;
        cardboard5.visible = false;
        cardboard6.visible = false;
        cardboard7.visible = false;
        cardboard8.visible = false;
        cardboard9.visible = false;
        cardboard10.visible = false;
        cardboard11.visible = false;
        cardboard12.visible = false;
        cardboard13.visible = false;
        cardboard14.visible = false;
        cardboard15.visible = false;
        cardboard16.visible = false;
        cardboard17.visible = false;
        cardboard18.visible = false;
        cardboard19.visible = false;
        cardboard20.visible = false;
        cup.visible = false

        fill("white")
        textSize(50)
        text("Welcome to the game!", 500, 50)

        fill("white")
        textSize(50)
        text("This game will test how helpful you can be to a stranger", 150, 100)

        fill("white")
        textSize(50)
        text("You get 2 options, you can either help the person or decide not to", 50, 150)

        fill("white")
        textSize(50)
        text("The decision is yours", 500, 200)

        if (keyDown("space")) {
            gameState = "level1"
        }

    }

    if (gameState === "level1") {
        home.visible = false;
        background1.visible = true;
        man.visible = true
        yes1.visible = true;
        help1.visible = true;


        if (keyDown(RIGHT_ARROW)) {
            console.info('right');
            man.x = man.x + 20
        }
        if (keyDown(LEFT_ARROW)) {
            console.info('left');
            man.x = man.x - 20
        }


        fill("white")
        textSize(50)
        text("Hello. I need help finding my cat!!! would you help me?", 150, 100)

        // if(mousePressedOver(yes1)){
        //     gameState="level11"    
        // }

        if (keyDown(DOWN_ARROW)) {
            gameState = "level11";
            console.log("yes")
        }
    }

    if (gameState === "level11") {

        createCanvas(400,400)
        background("black");
        // home.visible = false;
        background1.visible = false;
        man.visible = false;
        help1.visible = false;
        yes1.visible = false;

        // soifa = createSprite(20, 25, 18, 18);
        // soifa.addImage("help", manImg)
        // soifa.scale = 0.1
        // soifa.shapeColor = "yellow"
        soifa.visible = true; 
        cup.visible = true

        cardboard1.visible = true;
        cardboard2.visible = true;
        cardboard3.visible = true;
        //cardboard4.visible=false;
        cardboard5.visible = true;
        cardboard6.visible = true;
        cardboard7.visible = true;
        cardboard8.visible = true;
        cardboard9.visible = true;
        cardboard10.visible = true;
        cardboard11.visible = true;
        cardboard12.visible = true;
        cardboard13.visible = true;
        cardboard14.visible = true;
        cardboard15.visible = true;
        cardboard16.visible = true;
        cardboard17.visible = true;
        cardboard18.visible = true;
        cardboard19.visible = true;
        cardboard20.visible = true;

        // soifa.y = 60;
        // soifa.x = 40;

        if (keyDown(UP_ARROW)) {
            soifa.y = soifa.y - 3;
        }
        if (keyDown(DOWN_ARROW)) {
            soifa.y = soifa.y + 3;
        }
        if (keyDown(RIGHT_ARROW)) {
            soifa.x = soifa.x + 3;
        }
        if (keyDown(LEFT_ARROW)) {
            soifa.x = soifa.x - 3;
        }

        edges=createEdgeSprites();

        if (soifa.isTouching(cardboard1)||soifa.isTouching(cardboard2)
        ||soifa.isTouching(cardboard3)
        ||soifa.isTouching(cardboard5)||soifa.isTouching(cardboard6)
        ||soifa.isTouching(cardboard7)||soifa.isTouching(cardboard8)
        ||soifa.isTouching(cardboard9)||soifa.isTouching(cardboard10)
        ||soifa.isTouching(cardboard11)||soifa.isTouching(cardboard12)
        ||soifa.isTouching(cardboard13)||soifa.isTouching(cardboard14)
        ||soifa.isTouching(cardboard15)||soifa.isTouching(cardboard16)
        ||soifa.isTouching(cardboard17)||soifa.isTouching(cardboard18)
        ||soifa.isTouching(cardboard19)||soifa.isTouching(cardboard20)
        ||soifa.isTouching(edges)){
           soifa.x=20;
           soifa.y=25;
           soifa.velocityX=0;
           soifa.velocityY=0;
        }

        if (soifa.isTouching(cup)) {
            text("You Won",350, 50);
          }  

    }
    drawSprites();
}
