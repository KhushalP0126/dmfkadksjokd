var woodcutter1, woodcutter2, woodcutter3, woodcutter4, wcpic, wcpic1, wcpic2, wcpic3, tree1, t1, tree2, t2, tree3, t3, tree4, t4, tree5, t5;
var ground, gp, bg, wc1, wc2, w3, w4;
var treescount, timer, Sharpness, gamestate;

function preload(){
t1= loadImage("tree1.png")
t2= loadImage("tree2.png")
t3= loadImage("tree3.png")
t4= loadImage("tree4.png")
t5= loadImage("tree5.png")
wcpic = loadImage("woody2.png")
wcpic1 = loadAnimation("woodc1.png","woodc2.png","woodc3.png")
wcpic2 = loadImage("woody4.png")
wcpic3 = loadAnimation("woodc4.png", "woodc5.png", "woodc6.png")
gp = loadImage("ground.png")
}

function setup(){
createCanvas(displayWidth-20, displayHeight-20)
woodcutter1 = createSprite(1140, 540, 50, 50)
woodcutter1.addImage(wcpic)
woodcutter1.visible = false

woodcutter2 = createSprite(1140, 540, 50, 50)
woodcutter2.addAnimation("wodc",wcpic1)
woodcutter2.visible = false

woodcutter3 = createSprite(1140, 540, 50, 50)
woodcutter3.addImage(wcpic2)

woodcutter4 = createSprite(1140, 5406, 50, 50)
woodcutter4.addAnimation("wodc1",wcpic3)
woodcutter4.visible = false

tree1 = createSprite(200, 700, 50, 50)
tree1.addImage(t1)
tree1.scale=1;
tree2 = createSprite(300, 700, 50, 50)
tree2.addImage(t2)
tree2.scale=0.5;
tree3 = createSprite(400, 700, 50, 50)
tree3.addImage(t3)
tree3.scale=2.5;
tree4 = createSprite(500, 700, 50, 50)
tree4.addImage(t4)
tree4.scale=0.3;
tree5 = createSprite(600, 700, 50, 50)
tree5.addImage(t5)
tree5.scale=1;


ground=createSprite(600, 500)
ground.addImage(gp)
ground.scale=3.5;

edges=createEdgeSprites()
treescount=5;
timer = 221;
Sharpness = 4;
gamestate=1

}

function draw(){
    background('black');
if (gamestate === 1){
    tree1.bounceOff(edges);
    tree2.bounceOff(edges);
    tree3.bounceOff(edges);
    tree4.bounceOff(edges);
    tree5.bounceOff(edges);




    if(keyDown(LEFT_ARROW)){
        woodcutter1.x=woodcutter1.x-3;
        woodcutter2.x=woodcutter2.x-3;
        woodcutter3.x=woodcutter3.x-3;
        woodcutter4.x=woodcutter4.x-3;
        woodcutter3.visible=true
        woodcutter1.visible=false
 }

if(keyDown(RIGHT_ARROW)){
    woodcutter1.x=woodcutter1.x+3;
    woodcutter2.x=woodcutter2.x+3;
    woodcutter3.x=woodcutter3.x+3;
    woodcutter4.x=woodcutter4.x+3;
    woodcutter1.visible=true
    woodcutter3.visible=false
}
if(keyDown(UP_ARROW)){
    woodcutter1.y=woodcutter1.y-3;
    woodcutter2.y=woodcutter2.y-3;
    woodcutter3.y=woodcutter3.y-3;
    woodcutter4.y=woodcutter4.y-3;
}

if(keyDown(DOWN_ARROW)){
    woodcutter1.y=woodcutter1.y+3;
    woodcutter2.y=woodcutter2.y+3;
    woodcutter3.y=woodcutter3.y+3;
    woodcutter4.y=woodcutter4.y+3;
}

if(keyDown(SPACE)){
    woodcutter1.y=woodcutter1.y+3;
    woodcutter2.y=woodcutter2.y+3;
    woodcutter3.y=woodcutter3.y+3;
    woodcutter4.y=woodcutter4.y+3;
    
}







if(woodcutter1.isTouching(tree1) || woodcutter2.isTouching(tree1) ||
 woodcutter3.isTouching(tree1) || woodcutter4.isTouching(tree1)){
    tree1.destroy()
    treescount = treescount-1;
}

if(woodcutter1.isTouching(tree2) || woodcutter2.isTouching(tree2) ||
woodcutter3.isTouching(tree2) || woodcutter4.isTouching(tree2)){
    tree2.destroy()
    treescount = treescount-1;
}
if(woodcutter1.isTouching(tree3) || woodcutter2.isTouching(tree3) ||
woodcutter3.isTouching(tree3) || woodcutter4.isTouching(tree3)){
    tree3.destroy()
    treescount = treescount-1;
}
if(woodcutter1.isTouching(tree4) || woodcutter2.isTouching(tree4) ||
woodcutter3.isTouching(tree4) || woodcutter4.isTouching(tree4)){
    tree4.destroy()
    treescount = treescount-1;
}
if(woodcutter1.isTouching(tree5) || woodcutter2.isTouching(tree5) ||
woodcutter3.isTouching(tree5) || woodcutter4.isTouching(tree5)){
    tree5.destroy()
    treescount = treescount-1;
}


    
    drawSprites();
    text("x"+ mouseX, 10, 10)
    text("y"+ mouseY, 10, 20)
  
timelimit();
textSize(15)
text("TIMER :" + timer, 50, 50)

tree1move();
tree2move();
tree3move();
tree4move();
tree5move();



if(timer === 0){
    gamestate = 2
}


if(treescount === 0){
    gamestate = 3
    }
}


if (gamestate === 2)
{ 
gameover();
}



if (gamestate === 3){
    victory();
}


}



function victory(){
textSize(40)
fill("yellow")
text("YOU HAVE WON", 450, 200)
textSize(25)
fill("yellow")
text("Congrats you have won the Mission, BUT Lost Your Life", 300, 500)
woodcutter1.destroy();
}
function gameover(){
    textSize(40)
    fill("red")
    text("YOU HAVE LOST")
    textSize(25)
    fill("green")
    text("TREES ARE SAVED")
    woodcutter1.destroy();
}

function timelimit(){
    if (World.frameCount%30===0)
    {
    timer = timer - 1;  
    }
}

function sharp(){
    if(Sharpness === 0)
    {
        
    }
}







function tree1move(){
    if(frameCount%100 === 0){
var rand1 = Math.round(random(-4,4))
var rand2 = Math.round(random(-5,5))
tree1.velocityX = rand1 
tree1.velocityY = rand2
}
}

function tree2move(){
    if(frameCount%80 === 0){
var rand1 = Math.round(random(-4,4))
var rand2 = Math.round(random(-5,5))
tree2.velocityX = rand1 
tree2.velocityY = rand2
}
}

function tree3move(){
    if(frameCount%50 === 0){
var rand1 = Math.round(random(-4,4))
var rand2 = Math.round(random(-5,5))
tree3.velocityX = rand1 
tree3.velocityY = rand2
}
}

function tree4move(){
    if(frameCount%70 === 0){
var rand1 = Math.round(random(-4,4))
var rand2 = Math.round(random(-5,5))
tree4.velocityX = rand1 
tree4.velocityY = rand2
}
}

function tree5move(){
    if(frameCount%40 === 0){
var rand1 = Math.round(random(-4,4))
var rand2 = Math.round(random(-5,5))
tree5.velocityX = rand1 
tree5.velocityY = rand2
}
}


