var bg, bgImg;
var zombie, zombieImg;
var hunter, hunterImg;
var hunterShooting;
var zombieGroup 


function preload(){
    bgImg=loadImage("bg.jpeg");
    zombieImg = loadImage("zombie.png");
    hunterImg = loadImage("shooter_2.png")
    hunterShooting = loadImage("shooter_3.png")
}

function setup(){

    createCanvas(windowWidth,windowHeight);
    
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    bg.addImage(bgImg);
    bg.scale= 1.15

    hunter = createSprite(displayWidth - 1150, displayHeight- 300, 50, 50);
    hunter.addImage(hunterImg);
    hunter.scale = 0.5;

    //hunter.debug= true;
    hunter.setCollider("rectangle", 0,0,300,300);

    zombieGroup = new Group();

}

function draw(){

    background(0); 

    if(keyDown("UP_ARROW")){
        hunter.y = hunter.y - 30;
    } 

    if(keyDown("DOWN_ARROW")){
        hunter.y = hunter.y + 30;
    }

    if(keyWentDown("space")){
        hunter.addImage(hunterShooting)
    }

    else if(keyWentUp("space")){
        hunter.addImage(hunterImg)
    }

    if(zombieGroup.isTouching(hunter)){

        for(var i = 0; i < zombieGroup.length; i++){
            zombieGroup[i].destroy();
        }
        
    }

    spawnZombie();

    drawSprites();
}   

function spawnZombie(){

    if(frameCount%100 === 0){

        zombie=createSprite(random(500,1100),random(100,500), 40, 40);
        zombie.addImage(zombieImg);
        zombie.scale = 0.2115
        zombie.velocityX = -3;
        zombie.lifetime = 400;

        //zombie.debug= true
        zombie.setCollider("rectangle", 0,0,400,400);

        zombieGroup.add(zombie);

    }

}
