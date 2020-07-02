var hypnoticBall, database;
var position;
var playerCount, gameState;
var playerName;
var gameObj,playerObj,formObj


function setup(){
  playerCount=0
  gameState=0
  playerName=" ";
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  gameObj = new Game()
  gameObj.getGameState()
  gameObj.start()
 
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
