function setup() {
	createCanvas(windowWidth, windowHeight);
x = 200;
y = 200;
}


function draw() {
	background(0);
	fill(200,200,0);
	ellipse(x,y,300,200);



	if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
}
