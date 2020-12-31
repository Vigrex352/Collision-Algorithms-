var fixedRect, movingRect;
var diffX, diffY;
var rect1, rect2;

function setup() {
  createCanvas(600, 600);
  movingRect = createSprite(600, 400, 50, 100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 400, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  /*rect1 = createSprite(700, 200, 50, 100);
  rect1.velocityX = -3;
  rect1.shapeColor = "blue";
  rect2 = createSprite(200, 200, 50, 100);
  rect2.velocityX = +3;
  rect2.shapeColor = "orange";
  */

  rect1 = createSprite(300, 100, 50, 100);
  rect1.velocityY = +3;
  rect1.shapeColor = "blue";
  rect2 = createSprite(300, 600, 50, 100);
  rect2.velocityY = -3;
  rect2.shapeColor = "orange";
  
}

function draw() {

  background(255, 255, 255);
  customIsTouching();
  customBounceOff();
  drawSprites();
}

function swap() {
  var a = 10;
  var b = 20;
  var c;
  c = a;
  a = b;
  b = c;
}

function customIsTouching() {
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  diffX = movingRect.width / 2 + fixedRect.width / 2;
  console.log(diffX);
  diffY = movingRect.height / 2 + fixedRect.height / 2;
  console.log(diffY);
  if (movingRect.x - fixedRect.x < diffX &&
     fixedRect.x - movingRect.x < diffX &&
      movingRect.y - fixedRect.y < diffY &&
       fixedRect.y - movingRect.y < diffY) {
    movingRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
  }

  console.log(movingRect.x - fixedRect.x);
}

function customBounceOff() {
 sumX = rect1.width / 2 + rect2.width / 2;
 
 if(rect2.x - rect1.x < sumX && rect1.x - rect2.x < sumX) {
   rect1.velocityX = (-1) * rect1.velocityX;
   rect2.velocityX = (-1) * rect2.velocityX;
 }

 sumY = rect1.height / 2 + rect2.height / 2;
 if(rect2.y - rect1.y < sumY && rect1.y - rect2.y < sumY) {
  rect1.velocityY = (-1) * rect1.velocityY;
  rect2.velocityY = (-1) * rect2.velocityY;
 }
}
