var len;
var angle;
function setup() {
  var canvas = createCanvas(800, 600);
  slider = createSlider(0, TWO_PI, PI / 3, 0.01);
  stroke(random(0, 100),random(100,255),random(100,255))
  }
  function draw() {
    background(51);
    translate(width/2, height);
    angle = slider.value();
    branch(200, 10);
    }
function branch(len, weight) {
  
    line(0, 0, 0, -len);
    translate(0, -len);
    strokeWeight(weight);
    if (len > 1) {
      push();
      rotate(angle);
      branch(len * 0.67, weight * 0.67);
      pop();
      push();
      rotate(-angle);
      branch(len * 0.67, weight * 0.67);
      pop();
  }
}
