var inc = 0.01;
var scl = 10;
var cols;
var rows;
var zoff = 0;
var particle = [];
var flowfield = [];
var lifetime = 50; 
function setup() {
  createCanvas(800, 800);
  cols = floor(width / scl);
  rows = floor(height / scl);

  for (var i = 0; i < 1000; i++) {
    particle[i] = new Particle();
    flowfield = new Array(cols * rows);
    background(0);

  }
}

function mousePressed() {
  clear();
  //background(0);
}

function draw() {

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y) * cols;

      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);

      flowfield[index] = v;

      xoff += inc;

    }
    yoff += inc;
    zoff += 0.0001;

  }
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
    particle[i].thicker();
    // if (lifetime === 0) {
    //   particle.splice(i, 1);
    // }

  }
}

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;
  this.r = 1; 
  this.g = 5;
  this.b = 1;
  this.sw = 1;
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = (x + y) * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.prevPos = this.pos.copy();
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxspeed);
    this.acc.mult(0);
  };



  this.show = function() {

    //stroke(240, this.g, this.b, 5);
    stroke(this.pos.y % this.r, this.g, this.pos.x % this.b);
    strokeWeight(this.sw);
    // point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.updatePrev();

  }
    this.thicker = function keyPressed() {
    if (keyCode == UP_ARROW) {
      this.r++;
      this.g = 50; 
      this.b++; 
    } 
    if(keyCode == DOWN_ARROW){
      this.r = 50;
      this.g = 0; 
      this.b = 50; 
    }
  }
  
  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();

    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();

    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();

    }

  }
}