function Ball(loc, vel, rad, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the ball
  //by adding speed to x and y
  this.update = function(){
    if(this !== b1){
      var d = this.loc.dist(b1.loc);
      if(d>250){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(.05);
        this.vel.add(repForce);
      }
      if(d<85){
        var repForce = p5.Vector.add(b1.loc, this.loc);
        repForce.normalize();
        repForce.mult(.05);
        this.vel.mult(-.01);
      }
    }
    this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 100) this.vel.x = -this.vel.x;
    if(this.loc.x > width-100) this.vel.x = -this.vel.x;
    if(this.loc.y < 100) this.vel.y = -this.vel.y;
    if(this.loc.y > height-100) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new location
  this.render = function(){
    var d = this.loc.dist(b1.loc);
  if(d<400){
stroke(255,255,255);
strokeWeight(2);
}  else {stroke(random(0, 30), random(100, 255), random(180, 255), 150);
    strokeWeight(2)}
  //line(Balls[i].loc.x, Balls[i].loc.y, Balls[i].loc.x, Balls[i+1].loc.y, 30);
 line(this.loc.x, this.loc.y, 0, 0, 200);
  line(this.loc.x, this.loc.y, 800, 0);
  line(this.loc.x, this.loc.y, 0, 800);
     line(this.loc.x, this.loc.y, 800, 800, 0);
 line(this.loc.x, this.loc.y, 400, 400, 200);
  }
}
