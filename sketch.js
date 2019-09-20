var currSelection,currSelection2,currSelection3,currSelection4,currSelection5,currSelection6 = false;
var x, y, w, h;
var changeInX, changeInY;


var selectionRegionX = 25
var selectionRegionY = 450
var selectionRegionWidth = 310
var selectionRegionHeight = 225


//fruitselection status
var isAppleSelected = false
var isBananaSelected = false
var isKaleSelected = false
var isBaconSelected = false
var isPinappleSelected = false

var appleCheckMarkSize =1;
var kaleCheckMarkSize = 1;
var bananaCheckMarkSize =1;

//currect sign visible size
var checkMarkVisible = 25;
var checkMarkInVisible = 0.1;

//Origin positions
var spacing = 105;
var appleOriginX = 375
var appleOriginY = 65
var KaleOriginX = 375
var KaleOriginY = appleOriginY + spacing
var BananaOriginX = 375
var BananaOriginY = KaleOriginY + spacing
var BaconOriginX = 375
var BaconOriginY = BananaOriginY + spacing
var PinappleOriginX = 375
var PinappleOriginY = BaconOriginY + spacing

//load before the application launch
function preload() {
  apple_img = loadImage('Images/apple--v1.png');
  banana_img = loadImage('Images/banana.png');
  kale_img = loadImage('Images/big-carrot---v1.png');
  bacon_img = loadImage('Images/strawberry--v1.png');
  pineapple_img = loadImage('Images/ice-cream-in-waffle-cone.png');
  milk_img = loadImage('Images/milk-bottle--v2.png');
  smoothie_img = loadImage('Images/usageicon-smoothie.png');
  chocolate_img = loadImage('Images/Chocolate_Bar_Emoji_large.png');
  checkMark_img1 = loadImage('Images/icons8-checkmark-512 (1).png');
  checkMark_img2 = loadImage('Images/icons8-checkmark-512 (1).png');
  checkMark_img3 = loadImage('Images/icons8-checkmark-512 (1).png');
  font1 = loadFont('DK Crayon Crumble.ttf');
  font2 = loadFont('FROSTY__.TTF');
}

function setup() {
  createCanvas(480, 764);

  // Starting location
  x = appleOriginX;
  x2 = KaleOriginX;
  x3 = BananaOriginX;
  x4 = appleOriginX;
  x5 = appleOriginX;
  x6 = appleOriginX;

  //y will need to be the one that varies and signifies a new rectangle need an array and a loop + if statement combo in mousePressed to detect which rectangle is being used
  y = appleOriginY;

  y2 = KaleOriginY;
  y3 = BananaOriginY;
  y4 = BananaOriginY+spacing;
  y5 = y4+spacing;
  y6 = y5+spacing;
  // Dimensions
  w = 85;
  h = 85;
}

function draw() {
    if(isAppleSelected && isKaleSelected && isBananaSelected){
      //delayTime(0.5);
      finalScreen()
    }else{
       gameScreen()
    }
}

function mousePressed() {
  //

  //1st ingridient
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    currSelection = true;
    // only if true, alter location
    changeInX = x-mouseX;
    changeInY = y-mouseY;
  }

  //2nd ingridient
  if (mouseX > x2 && mouseX < x2 + w && mouseY > y2 && mouseY < y2 + h) {
    currSelection2 = true;
    // only if true, alter location
    changeInX2 = x2-mouseX;
    changeInY2 = y2-mouseY;
  }

  //3rd ingridient
  if (mouseX > x3 && mouseX < x3 + w && mouseY > y3 && mouseY < y3 + h) {
    currSelection3 = true;
    // only if true, alter location
    changeInX3 = x3-mouseX;
    changeInY3 = y3-mouseY;
  }

  //4th ingridient
  if (mouseX > x4 && mouseX < x4 + w && mouseY > y4 && mouseY < y4 + h) {
    currSelection4 = true;
    // only if true, alter location
    changeInX4 = x4-mouseX;
    changeInY4 = y4-mouseY;
  }

  //5th ingridient
  if (mouseX > x5 && mouseX < x5 + w && mouseY > y5 && mouseY < y5 + h) {
    currSelection5 = true;
    // only if true, alter location
    changeInX5 = x5-mouseX;
    changeInY5 = y5-mouseY;
  }

  //6th ingridient
  if (mouseX > x6 && mouseX < x6 + w && mouseY > y6 && mouseY < y6 + h) {
    currSelection6 = true;
    // only if true, alter location
    changeInX6 = x6-mouseX;
    changeInY6 = y6-mouseY;
  }
}

function mouseReleased() {
  // Quit currSelection
  currSelection = false;
  currSelection2 = false;
  currSelection3 = false;
  currSelection4 = false;
  currSelection5 = false;
  currSelection6 = false;

  if(isAppleSelected){
      console.log("Apple in region")
      appleCheckMarkSize = checkMarkVisible;
  } else {
      console.log("Apple not in region")
      appleCheckMarkSize = checkMarkInVisible;
      x=appleOriginX;
      y=appleOriginY;
  }

  if(isKaleSelected){
      console.log("Kale in region")
      kaleCheckMarkSize= checkMarkVisible;
  } else {
      console.log("Kale not in region")
      kaleCheckMarkSize= checkMarkInVisible;
      x2 = KaleOriginX;
      y2 = KaleOriginY;
  }

  if(isBananaSelected){
      console.log("Banana in region")
      bananaCheckMarkSize= checkMarkVisible;
  } else {
      console.log("Banana not in region")
      bananaCheckMarkSize= checkMarkInVisible;
      x3 = BananaOriginX;
      y3 = BananaOriginY;
  }

  //take bacon and pineapple to its original spot no matter where they are
    x4 = BaconOriginX;
    y4 = BaconOriginX;
    x5 = PinappleOriginX;
    y5 = PinappleOriginY;

}

function gameScreen(){
      background(71, 48, 45);

  noStroke();
  //right-hand rectangle
  fill(46, 24, 21);
  rect(360,0,136,728);

  //top rectangle
  fill(26, 0, 0);
  rect(0,0,480,24);

  //bottom rectangle
  fill(251, 192, 45);
  rect(0,700,480,72);

  //container rectangle
  fill(255);
  rect(selectionRegionX,selectionRegionY,selectionRegionWidth,selectionRegionHeight,20);

  // dynamically change loc as mouse moves
  //ingridient1
  if (currSelection) {
    x = mouseX + changeInX;
    y = mouseY + changeInY;
  }
  //ingridient2
  if (currSelection2) {
    x2 = mouseX + changeInX2;
    y2 = mouseY + changeInY2;
  }
  //ingridient3
  if (currSelection3) {
    x3 = mouseX + changeInX3;
    y3 = mouseY + changeInY3;
  }
  //ingridient4
  if (currSelection4) {
    x4 = mouseX + changeInX4;
    y4 = mouseY + changeInY4;
  }
  //ingridient5
  if (currSelection5) {
    x5 = mouseX + changeInX5;
    y5 = mouseY + changeInY5;
  }
  //ingridient6
  if (currSelection6) {
    x6 = mouseX + changeInX6;
    y6 = mouseY + changeInY6;
  }

  image(apple_img, x, y, w, h);
  image(kale_img, x2, y2, w, h);
  image(banana_img, x3, y3, w, h);
  image(bacon_img, x4, y4, w, h);
  image(pineapple_img, x5, y5, w, h);
  image(milk_img, x6, y6, w, h);
  image(checkMark_img1, 120, 210, appleCheckMarkSize, appleCheckMarkSize);
  image(checkMark_img2, 120, 250, kaleCheckMarkSize, kaleCheckMarkSize);
  image(checkMark_img3, 120, 290, bananaCheckMarkSize, bananaCheckMarkSize);


  //check if the fruit is in the seleted region
  if(x >= selectionRegionX && x+w <= selectionRegionX+selectionRegionWidth
       && y >= selectionRegionY && y+h <= selectionRegionY+selectionRegionHeight){
      isAppleSelected= true;
  } else {
      isAppleSelected = false;
  }

  if(x2 >= selectionRegionX && x2+w <= selectionRegionX+selectionRegionWidth
       && y2 >= selectionRegionY && y2+h <= selectionRegionY+selectionRegionHeight){
      isKaleSelected= true;
  } else {
      isKaleSelected =false;
  }

  if(x3 >= selectionRegionX && x3+w <= selectionRegionX+selectionRegionWidth
       && y3 >= selectionRegionY && y3+h <= selectionRegionY+selectionRegionHeight){
      isBananaSelected= true;
  } else{
      isBananaSelected = false;
  }





 //Text   // Challenge number
  fill(251, 192, 45);
  textFont(font2);
  textSize(48);
  text("Challenge 1",20,80);

  //smoothie name
  fill(251, 192, 45);
  textFont(font1);
  textSize(30);
  text("ABC Smoothie",16,140);

  //what to add
  fill(251, 192, 45);
  textSize(25);
  text("You Have to Add :",16,188);
  //ingridients
  fill(255);
  textSize(36);
  text("Apple",16,232);
  text("carrot",16,272);
  text("Banana",16,312);

}

function finalScreen(){
    clear()
    //Text   // Challenge number
    fill(0);
  /*  textFont('font2');
    textSize(50);
    text("You Won!! Hi5",20,80);*/
    background(71, 48, 45);

noStroke();


//top rectangle
fill(26, 0, 0);
rect(0,0,480,24);
textFont(font2);
textSize(70);
fill(251, 192, 45);
text("Challenge 1",80,100);
textSize(50);
text("Complete",145,170);
//image(smoothie_img, x, y, w, h);
textFont(font1);
textSize(40);



fill(251, 192, 45);
textSize(30);
text("One Chocolate Bar Contains 78g of Sugar",16,250);
text("Which Is Almost",145,280);
text("Six Glass of Smoothies !!!!!!!",90,310);
image(chocolate_img,200 ,350 , 70, 70);
image(smoothie_img, 70, 480, 100, 100);
image(smoothie_img, 120, 480, 100, 100);
image(smoothie_img, 170, 480, 100, 100);
image(smoothie_img, 220, 480, 100, 100);
image(smoothie_img, 270, 480, 100, 100);
image(smoothie_img, 320, 480, 100, 100);
textSize(70);
text("=",235,475);
//chocolate_img

}
