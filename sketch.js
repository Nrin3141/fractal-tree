const angle = 0.8;
const maxIterations = 15;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  translate(width / 2, height);
  branch(window.innerHeight / 3, 10, 0);
}

function branch(len, weight, iteration) {
  if (iteration > maxIterations) {
    return;
  }

  strokeWeight(weight);
  stroke(map(iteration, 0, 10, 100, 150), map(iteration, 0, 10, 100, 255), 100);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 1) {
    push();
    rotate(angle);
    branch(len * 0.67, weight * 0.67, iteration + 1);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67, weight * 0.67, iteration + 1);
    pop();
  }
}
