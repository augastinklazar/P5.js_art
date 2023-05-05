function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(255);
  stroke(0);
  fill(255);

  // Draw the head
  ellipse(width / 2, height / 2, 150, 150);

  // Draw the eyes
  ellipse(width / 2 - 75, height / 2 - 50, 25, 25);
  ellipse(width / 2 + 75, height / 2 - 50, 25, 25);

  // Draw the nose
  ellipse(width / 2, height / 2 - 25, 25, 25);

  // Draw the mouth
  line(width / 2 - 25, height / 2 + 25, width / 2 + 25, height / 2 + 25);

  // Draw the hair
  beginShape();
  vertex(width / 2 - 100, height / 2 + 100);
  vertex(width / 2 - 100, height / 2 - 100);
  vertex(width / 2 + 100, height / 2 - 100);
  vertex(width / 2 + 100, height / 2 + 100);
  endShape();

  // Draw the beard
  beginShape();
  vertex(width / 2 - 75, height / 2 + 50);
  vertex(width / 2 - 100, height / 2 + 100);
  vertex(width / 2 + 100, height / 2 + 100);
  vertex(width / 2 + 75, height / 2 + 50);
  endShape();
}
