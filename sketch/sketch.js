// for red, green, and blue color values
var r = 255; 
var g = 245; 
var b = 238;
var o = 100;
var title = "Wiggle Workshop v0.1"
var subtitle= "Press an object to play"

var requiredImages = 10;
var dogAnimation;

function preload(){

  items = {
    39  : new ScreenItem("assets/image/dog.png", 240, 116, 100, 0, loadSound('assets/sound/dog.wav')),
    38  : new ScreenItem("assets/image/cow.png", 155, 170, 185, 0, loadSound('assets/sound/cow.wav')),
    37  : new ScreenItem("assets/image/cat.png", 242, 198, 109, 0, loadSound('assets/sound/cat.wav')),
    40  : new ScreenItem("assets/image/pig.png", 160, 194, 187, 0, loadSound('assets/sound/pig.wav')),
    32  : new ScreenItem("assets/image/goat.png", 110, 197, 155, 0, loadSound('assets/sound/goat.wav')),
    0   : new ScreenItem("assets/image/goat.png", 110, 197, 155, 0, loadSound('assets/sound/goat.wav')),


  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentHeight = windowHeight / requiredImages;
  currentWidth = windowWidth / requiredImages;
  
  
}

function draw() {
  background(r,g,b);
  fill(220, 100, 55, o);
  textSize(windowWidth/15);
  textSize(windowWidth/20);
  text(subtitle, (windowWidth/2)-70, (windowHeight/2)+250);
  text(title, 50, windowHeight/2),200,200;
  drawSprites();
}

var currentWidth;
var currentHeight;

var lastKey = 0;

var pressed = false;
var ScreenItem = function(img, r, g, b, o, sfx) {
  this.fileName = img
  this.sound = sfx
  this.red =  r;
  this.green = g;
  this.blue = b;
  this.opacity = o;
};

var items;

function keyPressed(){
  if (!pressed) {
    pressed = true;
    if (lastKey != keyCode) {
      var sprites = getSprites();
      for (index in sprites) {
        sprites[index].remove();
      }
    }

    lastKey = keyCode;
    var item = items[keyCode];

    if (item instanceof ScreenItem) {

      if (item.fileName) {
        console.log("Adding image");
        addImage(item.fileName);
      }

      item.sound.play();
      r = item.red;
      g = item.green;
      b = item.blue;
      o = item.opacity;
      }
    }
}

function soundFinished(parameter) {
  pressed = false;
}

function keyReleased() {
  pressed = false;
}

function addImage(img) {
  var imageWidth = windowWidth / requiredImages;

  var xPosition = random(0, windowWidth) //(imageWidth + imageWidth * 0.5) * getSprites().length;
  var yPosition = random(0, windowHeight)//windowHeight * 0.5 - currentHeight * 0.5;

  var spriteImage = loadImage(img);
  var sprite = createSprite(xPosition, yPosition);
  sprite.addImage("image", spriteImage);

  var  scale = (sprite.width / imageWidth)/2; 
  sprite.scale =  scale;
}
 