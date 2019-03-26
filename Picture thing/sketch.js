var Balls = []
var b1;
var mouseToggle
function setup(){
  var cnv = createCanvas(800, 1000);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(55);
  b1 = new Ball(createVector(width/2, height/2), createVector(0,0), 100, color(255, 0, 0));
}

function loadBalls(number){
  for(var i = 0; i < number; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(0,3), random(0,3));
    var rad = random(2, 4);
    var col = color(random(255), random(255), random(255));
    Balls.push(new Ball(loc, vel, rad, col));
  }
}



function draw(){
  background(0, 0, 0, 50);
  b1.run();
  for(var i = 0; i < Balls.length; i = i + 1){
    Balls[i].run();
  }
}
