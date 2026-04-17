let segons = 0;
let actiu = false;
let particles = [];
let sliderPols;

function setup() {
  let canvas = createCanvas(300, 150);
  canvas.parent('canvas-holder');
  
  // Recuperem l'estat guardat
  segons = getItem('pols_segons') || 0;
  actiu = getItem('pols_actiu') || false;
  
  sliderPols = select('#polsSlider');
  sliderPols.value(getItem('pols_brillantor') || 20);

  // Creem partícules com al Repte 2
  for (let i = 0; i < 20; i++) particles.push(new Particle());

  select('#btnStart').mousePressed(toggleTimer);
  select('#btnReset').mousePressed(resetTimer);
  
  actualitzaBoto();
}

function draw() {
  // 1. Fons degradat original
  dibuixaDegradat();

  // 2. Partícules del Repte 2
  for (let p of particles) {
    p.update();
    p.display();
  }

  // 3. Lògica del rellotge
  if (actiu && frameCount % 60 == 0) {
    segons++;
    storeItem('pols_segons', segons);
    storeItem('pols_brillantor', sliderPols.value());
  }

  // 4. El teu POLS CULTURAL (Varetes i Neó)
  translate(width/2, height/2);
  dibuixaPols();

  // 5. Text digital
  let m = nf(floor(segons / 60), 2);
  let s = nf(segons % 60, 2);
  select('#timer').html(m + ":" + s);
}

function dibuixaDegradat() {
  let c1 = color("#0B132B");
  let c2 = color("#1C2541");
  for (let y = 0; y < height; y++) {
    stroke(lerpColor(c1, c2, map(y, 0, height, 0, 1)));
    line(0, y, width, y);
  }
}

function dibuixaPols() {
  let n = 12;
  let radi = 40;
  let brillantor = sliderPols.value();
  
  rotate(segons * 0.1); // El rellotge gira!

  for (let i = 0; i < n; i++) {
    push();
    rotate(i * (360/n));
    if (i === 2) { // La vareta d'energia (neó)
      stroke("#6FFFE9");
      strokeWeight(3);
      drawingContext.shadowBlur = brillantor;
      drawingContext.shadowColor = '#6FFFE9';
    } else {
      stroke(58, 80, 107, 150);
      strokeWeight(1);
      drawingContext.shadowBlur = 0;
    }
    line(0, 0, radi + sin(frameCount * 0.05) * 5, 0);
    pop();
  }
}

function toggleTimer() {
  actiu = !actiu;
  storeItem('pols_actiu', actiu);
  actualitzaBoto();
}

function resetTimer() {
  actiu = false;
  segons = 0;
  storeItem('pols_segons', 0);
  storeItem('pols_actiu', false);
  actualitzaBoto();
}

function actualitzaBoto() {
  select('#btnStart').html(actiu ? "PAUSA" : "START");
}

class Particle {
  constructor() { this.x = random(-width, width); this.y = random(-height, height); }
  update() { this.y -= 0.2; if (this.y < -height/2) this.y = height/2; }
  display() { noStroke(); fill(111, 255, 233, 50); circle(this.x, this.y, 2); }
}