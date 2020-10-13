const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var sanitizerimg,maskimg,glovesimg;
var virusimg,trubishimg,bg,bgimg;
var virus,sanitizer,mask,gloves,trubish; 
var start=1;
var play=2;
var end=3;
var gameState=start;
var message ="press to save the world";
var score=0;

function preload(){
    
 sanitizerimg=loadImage("images/sanitizer.png");
 maskimg=loadImage("images/mask.png");
 virusimg=loadImage("images/corona.png");
 trubishimg=loadImage("images/trubish.png");
 glovesimg=loadImage("images/gloves.png");
 bgimg=loadImage("images/bgtinted.png");
 
}

function setup(){
    createCanvas(displayWidth,displayHeight-40)
    
}

function draw(){
    text("score"+score,100,100)
    //todo try to tint the background image.
    image(bgimg, 0, 0,displayWidth, displayHeight-40 );
    if(gamestate=start){
        fill("black");
     textSize(100);
      text(message,200,400);
    }
    if(keyDown(UP_ARROW)){
        gameState=play;
       
    }
    if(gameState===play){
        showsanitizer();
        showmask();
        if(mousePressedOver(maskgroup)){
            score=score+5
        }
        showtrubish();
        showgloves();
        showvirus();
         message="";
         
        
    }
    fill("black")
    textSize(20); 
  
    
    drawSprites();
}   
function showsanitizer(){
    if(frameCount % 90 === 0){
        sanitizer=createSprite(random(20,1180),850,50,50);
        sanitizer.addImage(sanitizerimg);
        sanitizer.scale=0.15;
        sanitizer.velocityY=-2;
        if(sanitizer.y<200){
           // sanitizer.velocityY=sanitizer.velocityY=+2
        }
        
    }
}
function showmask(){
     if(frameCount% 90===0){
        mask=createSprite(random(20,1180),850,50,50);
        mask.addImage(maskimg);
        mask.scale=0.16;
        mask.velocityY=-2;
        var maskgroup = new Group();
        maskgroup.add(mask);
       
        }

}
function showvirus(){
    if(frameCount% 300===0){
        virus=createSprite(random(20,1180),850,50,50);
        virus.addImage(virusimg);
        virus.scale=0.5;
        virus.velocityY=-2;
}
}
function showtrubish(){
    if(frameCount% 150===0){
       trubish=createSprite(random(20,1180),850,50,50);
       trubish.addImage(trubishimg);
       trubish.scale=0.07;
       trubish.velocityY=-2;
}
}
function showgloves(){
    if(frameCount% 90===0){
        gloves=createSprite(random(20,1180),850,50,50);
        gloves.addImage(glovesimg);
        gloves.scale=0.1;
        gloves.velocityY=-2;
}
}