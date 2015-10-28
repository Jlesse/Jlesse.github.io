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
  fft = new p5.FFT();
}

function draw() {

var spectrum = fft.analyze();
console.log()

var midMultiplier = (fft.getEnergy("mid") / 255) * 5 + 1
var highMultiplier = (fft.getEnergy("treble") / 255) * 5 + 1

if (x1 > 1000) {modifier = -2}
else if (x1 < 1) {modifier = 2}
      x1= 50 * midMultiplier; //x1+modifier;
      y1= 50 * highMultiplier; //y1+modifier;

 rotateX(frameCount * 10000.00);
 rotateY(frameCount * 10000.00);

  box(x1, y1, 200);

  translate(-150,0,0);
  sphere(50,6);
  translate(150,0,0);
  sphere(50,6);
  torus(50, 8, 5);

}
