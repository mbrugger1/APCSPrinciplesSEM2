/*
**  Ball Constructor Function
**  markus
**  Aug 20, 2018
*/
function Ball(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;    //?
   this.rad = radius;
   this.col = col;
   this.acc = createVector(0,1);
 this.run = function(){
     this.checkEdges();
     this.update();
     this.render();
 }

   this.update = function(){
    var d = this.loc.dist(ball.loc)
    var attForce = p5.Vector.sub(ball.loc, this.loc);
    attForce.normalize();
    attForce.mult(.02);
    this.vel.limit(3);
    this.loc.add(this.vel);
  }

    }
   this.checkEdges = function(){
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.x > width) this.vel.x = -this.vel.x;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
      if(this.loc.y > height) this.vel.y = -this.vel.y;
   }
this.render = function(){
//  fill(this.col);
  stroke(255,150);
  strokeWeight(1.5);
  line(this.loc.x, this.loc.y);
}

//comment
