var x1 = 200;
var y1 = 200;
var bass = 200;

function preload() {
  cheese = loadSound("./cheese.mp3");
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("myContainer");
  cheese.play();
  fft = new p5.FFT();
  frameRate(60)
}

function draw() {
  if(y1 > 1 || y1 > 2){
    background(bass / 51 * 80 + (bass * (y1 * 10)), bass / 51 * 80 + (bass * x1 * 10), 0)
  }

  var spectrum = fft.analyze();

  bass = (fft.getEnergy("bass") / 51)
  x1 = (fft.getEnergy("mid") / 51)
  y1 = (fft.getEnergy("treble") / 51)

  console.log(y1)

  rotateX((millis() / 1000) + (5000 - (y1 * 100)));
  rotateY((millis() / 1000)+ (5000 - (y1 * 100)));

  box(x1, y1, 200);

  translate(-150,0,0);
  sphere(50,6);
  translate(150,0,0);
  sphere(50,6);
  translate(150,150,bass - 150)
  torus(y1 * 10, 8, 5);
  translate(-150,-150, bass - 150)
  torus(y1 * 10, 8, 5);

}
