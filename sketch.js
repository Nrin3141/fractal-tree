class Configuration {
  constructor() {
    this.angle = 10;
    this.maxIterations = 5;
    this.branches = 3;
    this.lenDecay = 2 / 3;
  }
}

let config;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  angleMode(DEGREES);
  translate(width / 2, height);
  config = new Configuration();
  branch(window.innerHeight / 4, 10, 0, config.maxIterations, config.angle);
  const gui = new dat.GUI();
  let angleController = gui
    .add(config, "angle", 5, 180 / config.branches)
    .step(1);
  const iterationController = gui.add(config, "maxIterations", 1, 10).step(1);
  const branchController = gui.add(config, "branches", 1, 5).step(1);

  angleController.onFinishChange(drawTree);
  branchController.onFinishChange(drawTree);
  iterationController.onFinishChange(drawTree);
}

function drawTree() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  branch(window.innerHeight / 4, 10, 0);
}

function branch(len, weight, iteration) {
  if (iteration > config.maxIterations) {
    return;
  }
  strokeWeight(weight);
  stroke(map(iteration, 0, 10, 100, 150), map(iteration, 0, 10, 100, 255), 100);
  line(0, 0, 0, -len);
  translate(0, -len);
  rotate(config.angle * Math.floor(config.branches / 2));
  for (let i = 0; i < config.branches; i++) {
    push();
    rotate(-config.angle * i);
    branch(len * config.lenDecay, weight * config.lenDecay, iteration + 1);
    pop();
  }
}
