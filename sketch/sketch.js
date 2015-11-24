// for red, green, and blue color values
var r=0; 
var g=0; 
var b=0;

function preload(){
  dogSound = loadSound('assets/dog.wav');
  cowSound = loadSound('assets/cow.wav');
  catSound = loadSound('assets/cat.wav');
  pigSound = loadSound('assets/pig.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
background(r,g,b);
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    r=255;
    g=0;
    b=0;
    dogSound.play();
  }
  if(keyCode == DOWN_ARROW){
    r=0;
    g=255;
    b=0;
    cowSound.play();
  }
  if(keyCode == LEFT_ARROW){
    r=0;
    g=0;
    b=255;
    catSound.play();
  }
  if(keyCode == RIGHT_ARROW){
    r=255;
    g=0;
    b=255;
    pigSound.play();
  }
}
 