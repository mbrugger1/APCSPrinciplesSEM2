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
      if(d>200){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(.05);
        this.vel.add(attForce);
      }
      if(d<200){
        var repForce = p5.Vector.add(b1.loc, this.loc);
        repForce.normalize();
        repForce.mult(.02);
      //  this.vel.mult(-2);
        this.vel.add(repForce);

      }
    }
    this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new location
  this.render = function(){
    var d = this.loc.dist(b1.loc);
  if(d<100){
stroke(random(0,255),random(0,255),255);
strokeWeight(2);
}
    else {stroke(random(0, 255), random(100, 255), random(180, 255), 150);
    strokeWeight(3)}
  //line(this.loc.x, this.loc.y, b1.loc.x, b1.loc.y, 0);
//  line(this.loc.x, this.loc.y, 0, 0);
//   line(this.loc.x, this.loc.y, 800, 0);
  //  line(this.loc.x, this.loc.y, 0, 800);
  //    line(this.loc.x, this.loc.y, 800, 800, 0);
//  ellipse(this.loc.x, this.loc.y, b1.loc.x-800, b1.loc.y-800);
//curveVertex(10,50);
  bezier(this.loc.x, this.loc.y, b1.loc.x, b1.loc.y, d, d, d, d)
//  line(b1.loc.y, b1.loc.x, this.loc.y, this.loc.x);
//    line(b1.loc.y-200, b1.loc.x, this.loc.y, this.loc.x);
  //  line(Balls[i+1].loc.x, Balls[i+1].loc.y, this.loc.x, this.loc.y);
  }
}
