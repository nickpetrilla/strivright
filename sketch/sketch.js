// for red, green, and blue color values
var r = 255; 
var g = 245; 
var b = 238;
var o = 100;
var title = "Wiggle Workshop v0.1"
var subtitle= "Press an object to play"

var requiredImages = 10;
var dogAnimation;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadItems();
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

var items = {};

function loadItems() {
  items[RIGHT_ARROW] = new ScreenItem("assets/image/dog.png", 240, 116, 100, 0, loadSound('assets/sound/dog.wav')),
  items[UP_ARROW] = new ScreenItem("assets/image/cow.png", 155, 170, 185, 0, loadSound('assets/sound/cow.wav')),
  items[LEFT_ARROW] = new ScreenItem("assets/image/cat.png", 242, 198, 109, 0, loadSound('assets/sound/cat.wav')),
  items[DOWN_ARROW] = new ScreenItem("assets/image/pig.png", 160, 194, 187, 0, loadSound('assets/sound/pig.wav')),
  //LEFT - MOUSE BUTTON
  items[LEFT] = new ScreenItem("assets/image/goat.png", 110, 197, 155, 0, loadSound('assets/sound/goat.wav'))
}

//called once when a mouse button is pressed.
function mousePressed() {
  var item = items[mouseButton];
  //if we have an item that maps to the mouse button that was clicked
  //update the screen and display the item.
  if (item) {
   updateScreenForKey(mouseButton);
   displayScreenItem(item);
  }
}

//updates the state of the screen for the given key
function updateScreenForKey(key) {
    if (lastKey != key) {
      //if the button pressed is different
      //than the last button pressed
      //clear all old images from the screen
      var sprites = getSprites();
      for (index in sprites) {
        sprites[index].remove();
      }
    }
   lastKey = key;
}

function keyPressed(){
  //this 'if' check is preventing
  //calling this code if a key is held down
  if (!pressed) {
    pressed = true;
    updateScreenForKey(keyCode);
    var item = items[keyCode];

    //if the value retrieved from the items object
    //is a ScreenItem, we can go about displaying it
      if (item instanceof ScreenItem) {
        displayScreenItem(item);
      }
    }
}

//updates the screen with the given ScreenItem
function displayScreenItem(item) {
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

function soundFinished(parameter) {
  pressed = false;
}

function keyReleased() {
  pressed = false;
}

function addImage(img) {
  var imageWidth = windowWidth / requiredImages;

  var xPosition = random(0, windowWidth);
  var yPosition = random(0, windowHeight);

  var spriteImage = loadImage(img);
  var sprite = createSprite(xPosition, yPosition);
  sprite.addImage("image", spriteImage);

  var  scale = (sprite.width / imageWidth)/2; 
  sprite.scale =  scale;
}
 