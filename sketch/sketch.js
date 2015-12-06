// for red, green, and blue color values
var r = 0; 
var g = 0; 
var b = 0;

var requiredImages = 10;
var dogAnimation;

function preload(){

  items = {
    39  : new ScreenItem("assets/image/dog.png", 240, 116, 100, loadSound('assets/sound/dog.wav')),
    38  : new ScreenItem("assets/image/cow.png", 155, 170, 185, loadSound('assets/sound/cow.wav')),
    37  : new ScreenItem("assets/image/cat.png", 242, 198, 109, loadSound('assets/sound/cat.wav')),
    40  : new ScreenItem("assets/image/pig.png", 160, 194, 187, loadSound('assets/sound/pig.wav')),
    41  : new ScreenItem(null, 110, 197, 155, loadSound('assets/sound/goat.wav')),


  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentHeight = windowHeight / requiredImages;
  currentWidth = windowWidth / requiredImages;
}

function draw() {
  background(r,g,b);
  drawSprites();
}

var currentWidth;
var currentHeight;

var lastKey = 0;

var pressed = false;
var ScreenItem = function(img, r, g, b, sfx) {
  this.fileName = img
  this.sound = sfx
  this.red =  r;
  this.green = g;
  this.blue = b;
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
  sprite.scale =  scale
}
 