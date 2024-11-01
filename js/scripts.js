let cars;
let font1;
let rayo;
let jack;
let cotxe = 0;
let x = 0;
let imatges = [];

function preload(){
  cars = loadImage("img/cars/cars.png");
  font1 = loadFont("txt/Kelvinized.otf");
  imatges[0] = loadImage("img/cars/rayo.png");
  imatges[1] = loadImage("img/cars/jack.png");
}

function setup() {
  let myCanvas1 = createCanvas(720, 1280);
  myCanvas1.parent('myContainer1');
  angleMode(DEGREES);
}

function draw() {
  // COTXES
  switch (cotxe) { 
    case 0:
      background(220, 10, 10);
      punts();
      logo();
      text1();
      text2();
      rotate(-90);
      scale(0.6,0.6);
      image(imatges[0], -1400, x-730); 
      x += 7;
      break;
    case 1:
      background(30, 5, 90);
      punts();
      logo();
      text1();
      text2();
      rotate(-90);
      scale(0.4,0.4);
      image(imatges[1], -2050, x-730);
      x += 10;
      break;
  }

  // Si la figura sale del canvas, reinicia la posición x
  if (x > width) {
    x = 0;
  }
}

function mousePressed() {
  // Incrementa el tipo de figura
  cotxe++;
  
  // Si el tipo de figura supera el número de figuras disponibles, reinícialo
  if (cotxe > 1) {
    cotxe = 0;
  }
  
  // Reinicia la posición x para comenzar de nuevo
  x = 0;
}

function punts() {
  // Punts de Fondo
  let x = 0;
  let y = 0;
  let distanciaPunts = 30;

  fill(255, 255, 255, 150);
  strokeWeight(1);
  while (y < height) {
    while (x < width) {
      ellipse(x, y, 5, 5);
      x += distanciaPunts;
    }
    x = 0;
    y += distanciaPunts;
  }
}

function logo() {
  // LOGO superior
  push(); // Guardar la configuración de transformación actual
  scale(0.2, 0.2);
  image(cars, 720, 150);
  pop();
}

function text1() {
  // TEXT superior
  fill(255);
  textAlign(CENTER);
  textFont(font1);
  stroke(0);
  strokeWeight(3);
  textSize(30);
  text("Proximament a cinemes", 360, 1150);
}

function text2() {
  // TEXT inferior
  fill(255);
  textAlign(CENTER);
  textFont("monospace");
  textSize(30);
  stroke(0);
  strokeWeight(3);
  text("10.06.2024", 360, 1200);
}