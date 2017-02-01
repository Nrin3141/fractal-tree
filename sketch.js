var lines = [];
var x = 0;
var y = -300;
function setup() {
  var canvas = createCanvas(1600, 800);
  background(255);
for (i = 0; i < 10; i++) {
  lines[i] = new createLine();
}


}
function draw() {
  background(255);
    for (i = 0; i < lines.length; i++) {
      lines[i].display();
    }
}
function createLine() {
    this.display = function() {
        translate(width/2, height);
        var v = createVector(random(x), random(y));
        stroke(0);
        strokeWeight(20);
        push();
        line(0,0, v.x, v.y);
        pop();

    }
}
