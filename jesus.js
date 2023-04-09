function setup() {
    createCanvas(800, 600);
    noLoop();
  }
  function draw() {
    background(255);
    drawStainedGlass();
  }
  function drawStainedGlass() {
    const numShapes = 24;
    const angleStep = TWO_PI / numShapes;
    for (let i = 0; i < numShapes; i++) {
      let angle = i * angleStep;
      let x1 = width / 2 + cos(angle) * 150;
      let y1 = height / 2 + sin(angle) * 150;
      let x2 = width / 2 + cos(angle + angleStep) * 150;
      let y2 = height / 2 + sin(angle + angleStep) * 150;
      let gradientColor1 = color(180, 60, 30, 150);
      let gradientColor2 = color(255, 200, 0, 150);
      drawGradientTriangle(width / 2, height / 2, x1, y1, x2, y2, gradientColor1, gradientColor2);
    }
  }
  function drawGradientTriangle(x0, y0, x1, y1, x2, y2, c1, c2) {
    const steps = 50;
    for (let t = 0; t <= 1; t += 1 / steps) {
      let x = lerp(x0, x1, t);
      let y = lerp(y0, y1, t);
      let x_ = lerp(x0, x2, t);
      let y_ = lerp(y0, y2, t);
      let c = lerpColor(c1, c2, t);
      stroke(c);
      line(x, y, x_, y_);
    }
  }