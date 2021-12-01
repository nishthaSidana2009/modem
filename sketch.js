let angleRotate=0.0

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  translate(370,260)
  rotate(radians(angleRotate))
  stroke("red").
  strokeWeight(5)
  triangle(200,200,50,50,50,150)
  ellipse(200,60,300)
  angleRotate += 3.50
  point(0.05,300)
}