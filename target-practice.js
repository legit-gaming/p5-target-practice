var canvasWidth = '600';
var canvasHeight = '600';

var targets = [];

// p5 lifecycle function
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background('white');
  noStroke();
}

// p5 lifecycle function
function draw() {
  background('white');

  addTarget();
  growTargets();
  drawTargets();
}

function addTarget() {
  if (frameCount % 30 === 0) {
    targets.push(createTarget());
  }
}

function createTarget() {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    width: 30
  };
}

function drawTargets() {
  fill('black');
  targets.forEach(function (target) {
    if (!target.hit) {
      ellipse(target.x, target.y, target.width);
    }
  });
}

function growTargets() {
  targets.forEach(function (target) {
    target.width += 1;
  });
}

function mousePressed() {
  targets.forEach(function (target) {
    var distanceFromCenter = target.width / 2;
    var minX = target.x - distanceFromCenter;
    var maxX = target.x + distanceFromCenter;
    var minY = target.y - distanceFromCenter;
    var maxY = target.y + distanceFromCenter;

    if (mouseX >= minX && mouseX <= maxX &&
      mouseY >= minY && mouseY <= maxY) {
      target.hit = true;
    }
  });
}
