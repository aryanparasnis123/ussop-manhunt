var bg,bgImage,ussop,ussopImage,lucciImage,kakuImage,jabraImage,bluenoImage,fireball,fireballImage
function preload(){
	bgImage=loadImage("Bg.jpg");
	ussopImage=loadImage("ussop.png")
	lucciImage=loadImage("lucci.png")
	kakuImage=loadImage("kaku.png")
	bluenoImage=loadImage("blueno.png")
	jabraImage=loadImage("jabra.png")
	fireballImage=loadImage("fireball.png")
}

function setup() {
	createCanvas(1200, 700);

bg=createSprite(600,350,1200,700)
	bg.addImage(bgImage);
bg.scale=1.4

ussop=createSprite(107,325,20,20)
ussop.addImage(ussopImage)
ussop.scale=0.2	
  
enemyGroup=createGroup()
}


function draw() {
  background(0);
  
  if(keyDown("DOWN_ARROW")){
	  ussop.y=ussop.y+15
  }

   
  if(keyDown("UP_ARROW")){
	ussop.y=ussop.y-15
}

enemies();

  drawSprites();
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)
 
}

function enemies(){
	if(frameCount%150===0){
		enemy= createSprite(1200,340,50,50)
		enemy.y=Math.round(random(340,650))
		enemy.velocityX=-3
		enemyGroup.add(enemy)
		enemyGroup.setLifetimeEach(1000)
		var rand = Math.round(random(1,4))
		if(rand===1){
			enemy.addImage(lucciImage)
			enemy.scale=0.1
		}
		else if(rand===2){
			enemy.addImage(kakuImage)
			enemy.scale=0.15
		}
		else if(rand===3){
			enemy.addImage(bluenoImage)
			enemy.scale=0.15
		}
		else{
			enemy.addImage(jabraImage)
			enemy.scale=0.2
		} 
		
	}
}
function keyPressed(){
	if(keyCode===32){
		fireball=createSprite(ussop.x+10,ussop.y-20,20,20)
		fireball.velocityX=3
		fireball.addImage(fireballImage)
		fireball.scale=0.1
	}
}
