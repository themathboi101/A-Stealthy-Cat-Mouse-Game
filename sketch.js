var bg, bg2;
var tom, tomIMG;
var jerry,jerryIMG;
var cat, cat2,cat3, mouse, mouse2,mous3;;


function preload() {
    //load the images here
    bg2=loadImage("garden.png");

    cat2=loadImage("cat1.png") ;
    cat3=loadAnimation("cat2.png","cat3.png");
    cat4=loadImage("cat4.png");
    
    mouse2=loadImage("mouse1.png");
    mouse3=loadAnimation("mouse2.png","mouse3.png");
    mouse4=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here;
    bg=createSprite(500,400,500,400);
    bg.addImage("garden",bg2);

   cat=createSprite(700,400,50,50);
   cat.addImage("catStill",cat2);
   cat.addAnimaton("catRunning",cat3);
   cat.addImage("catEnd",cat4);


   mouse=createSprite(300,400,30,30);
   mouse.addImage("mouseStill",mouse2);
   mouse.addAnimation("mouseRunning",mouse3);
   mouse.addImage("mouseEnd",mouse4);

}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    collisionSprites();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.changeAnimation("catRunning",cat3);
      cat.velocityX=-4;
      mouse.changeAnimation("mouseRunning",mouse3);
        
  }
}
function collisionSprites(){
      if(cat.x+mouse.x<=cat.width/2+mouse.width/2{
        cat.changeAnimation("catEnd",cat4);
        cat.velocityX=0;
        mouse.chnageAnimation("mouseEnd",mouse4);
      }
    }






