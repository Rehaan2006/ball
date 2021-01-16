var canvas;
var database;
var gameState=0;
var playerCount;
var form;
var player;
var game;

function setup(){
  database = firebase.database();
  console.log(database);
 canvas= createCanvas(500,500);
game=new Game();
game.getState();
game.start();

}

function draw(){
  background("white");
  
   
   
  
}

