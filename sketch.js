let snake;
let size = 10;
var food;
function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  newLocation();
  frameRate(10);
}

function newLocation(){
    food = createVector(floor(random(60)*1),floor(random(60)*1));
    showLocation(food.x,food.y);
}

function showLocation(){
    fill('red');
    rect(food.x,food.y,1,1);
}

function keyPressed(){
    if(keyCode === UP_ARROW && snake.yspeed!=1){
        snake.change(0,-1);
    }
    else if(keyCode === DOWN_ARROW && snake.yspeed!=-1){
        snake.change(0,1);
    }
    else if(keyCode === RIGHT_ARROW && snake.xspeed!=-1){
        snake.change(1,0);
    }
    else if(keyCode === LEFT_ARROW && snake.xspeed!=1){
        snake.change(-1,0);
    }
}

function draw() {
  scale(size);
  background(51);
  snake.update();
  snake.show();
  showLocation();
  snake.eat();
  snake.gameStatus();
}
