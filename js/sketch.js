var x1 = 200;
var y1 = 200;
var bass = 200;

function preload() {
  cheese = loadSound("/sound/cheese.mp3");
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("myContainer");
  cheese.play();
  fft = new p5.FFT();
  frameRate(60)
}

function draw() {
  var spectrum = fft.analyze();

  bass = (fft.getEnergy("bass") / 51)
  mid = (fft.getEnergy("mid") / 51)
  treb = (fft.getEnergy("treble") / 51)

  if(treb > 1 || treb > 2){
    background(bass / 51 * 80 + (bass * (treb * 10)), bass / 51 * 80 + (bass * mid * 10), 0)
  }

  rotateX((millis() / 1000) + (5000 - (treb * 100)));
  rotateY((millis() / 1000)+ (5000 - (treb * 100)));

  box(mid, treb, 400);

  if(treb < 1 && millis() %2 === 0){
    fill(color(10 * bass, 10 * treb, 20 * mid));
    noStroke();
  }else{
    fill(color(100, mid * 50, bass * 100));
    strokeWeight(mid*1.5);
    stroke(mid * 50);
  }
  translate(-150,0,0);
  sphere(50,6);
  translate(150,0,0);
  sphere(50,6);
  translate(150,150,bass - 150)
  torus(treb * 10, 8, 5);
  translate(-150,-150, bass - 150)
  torus(treb * 10, 8, 5);

}
