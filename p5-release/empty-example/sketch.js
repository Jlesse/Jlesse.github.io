var x1 =0;
var y1 = 0;
var modifier = 1;

function preload() {
  cheese = loadSound("./cheese.mp3");
}

function setup() {
  var myCanvas = createCanvas(600, 400, WEBGL);
  myCanvas.parent("myContainer");
  cheese.play();
}

function draw() {
if (x1 > 1000) {modifier = -2}
else if (x1 < 1) {modifier = 2}
      x1= x1+modifier;
      y1= y1+modifier;

 rotateX(frameCount * 0.01);
 rotateY(frameCount * 1.00);

  box(x1, y1, 200);

  translate(-150,0,0);
  sphere(200,6);
  translate(150,0,0);
  sphere(200,6);
  torus(300, 80, 4);

}