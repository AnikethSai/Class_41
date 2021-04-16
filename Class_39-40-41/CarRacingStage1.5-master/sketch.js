var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload()
{
  c1i = loadImage("Images/car1.png");
  c2i = loadImage("Images/car2.png");
  c3i = loadImage("Images/car3.png");
  c4i = loadImage("Images/car4.png");
  tracki = loadImage("Images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState ===2){
    game.end();
  }
}
