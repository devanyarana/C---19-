
var boyGameImg, boyGame;
function preload(){
 boyGameImg = loadAnimation("crazy_man_1_-removebg-preview.png","crazy_man_2_-removebg-preview.png","crazy_man_3_-removebg-preview.png");
}



function setup() {

    boyGame = createSprite(180,340,30,30);
    boyGame.scale=0.8;
    boyGame.addAnimation("Running",boyGameImg);
      
 
}

function draw() {


    drawSprites();
 
}