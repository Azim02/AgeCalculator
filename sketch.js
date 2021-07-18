var canvas, backgroundImage;
var form;
var finder;


function preload(){
  backgroundImage = loadImage("bg.jpg");
}

function setup(){
  canvas = createCanvas(400,400);

  form = new Form();

  finder = new Finder();
}

function draw(){

  background(backgroundImage);

  form.display();

  drawSprites();
}