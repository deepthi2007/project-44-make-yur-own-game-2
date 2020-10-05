var yellow1,yellow2;
var blue1,blue2;
var green1;
  
var colorFlag=0;


function setup() {
  createCanvas(400,400);
  yellow1 = createSprite(80, 60, 50, 100);
  yellow1.shapeColor="orange";
  blue1 = createSprite(320,60,50,100);
  blue1.shapeColor="orange";

  blue2 = createSprite(80,200,50,100);
  blue2.shapeColor="orange";
  green1 = createSprite(320,200,50,100);
  green1.shapeColor="orange";

  yellow2 = createSprite(200,300,50,100);
  yellow2.shapeColor="orange";
}

function draw() {
  background("pink");
   
  if(colorFlag===0){
    yellow1.shapeColor="orange";
    blue1.shapeColor="orange";
    blue2.shapeColor="orange";
    green1.shapeColor="orange";
    yellow2.shapeColor="orange";
    
  }
  if (mousePressedOver(yellow1)){
    yellow1.shapeColor="yellow";
    colorFlag=1;
  }/* else{
    yellow1.shapeColor="orange";
    colorFlag=0;
  } */

  if(mousePressedOver(blue1)){
    blue1.shapeColor="blue";
    colorFlag=1;
  }/* else{
    blue1.shapeColor="orange";
    colorFlag=0;
  }
 */
  if(mousePressedOver(blue2)){
    blue2.shapeColor="blue";
    colorFlag=1;
  }/* else{
    blue2.shapeColor="orange";
    colorFlag=0;
  } */

  if(mousePressedOver(yellow2)){
    yellow2.shapeColor="yellow";
    colorFlag=1;
  }
  /* else{
    yellow2.shapeColor="orange";
    colorFlag=0;
  } */

  if(mousePressedOver(green1)){
    green1.shapeColor="green";
    colorFlag=1;
  } /* else{
    green1.shapeColor="orange";
    colorFlag=0;
  } 
 */
  if(compare(yellow1,yellow2) && colorFlag===1){
    text("you won",200,370);
    //console.log("error");
  }else{
    if(mousePressedOver(blue1) || mousePressedOver(blue2) || mousePressedOver(green1)){
      colorFlag=0;
    }
    //text("try again",100,370);
  }

  if(compare(blue1,blue2) && colorFlag===1){
    text("you won",200,370);
  }else{
    if(mousePressedOver(yellow1) || mousePressedOver(yellow2) || mousePressedOver(green1)){
      colorFlag=0;
    }
    //text("try again",100,370);
  }
  
  drawSprites();
}
function compare(card1,card2){
    if(card1.shapeColor===card2.shapeColor){
      return true;
    }else{
      return false;
    }
}