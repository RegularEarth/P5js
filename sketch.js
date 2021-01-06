var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];

function setup() {
  createCanvas(600, 400);
  print(floor(random(1, 10)))
  for(var i = 0; i < 30; i = i +1){
    x[i] = floor(random(0, width));
    y[i] = 0;
    incremento[i] = floor(random(5, 10));
    h[i] = floor(random(1, 5));
  }
  print(x);
  print(y);
  print(incremento);
  print(h);
}

function draw() {
  background(255,0,0);
  //Arbol
  stroke(0);
  fill(100,50,50);
  rect(280, 300, 60,100);
  
  stroke(0);
  strokeWeight(4);
  fill("green");
  ellipse(300, 300, 300,100); 
  stroke(0);
  strokeWeight(4);
  fill("green");
  ellipse(300, 200, 250,100); 
  stroke(0);
  strokeWeight(4);
  fill("green");
  ellipse(300, 110, 150,80); 
  
  //Nieve
  strokeWeight(4);
  if (keyIsPressed) {
  if ((key == 'h') || (key == 'H')) {
    fill("orange");
    push();
    translate(width * 0.5, height * 0.1);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 10, 5);
    pop();
    stroke(0);
    //triangle(300, 75, 58, 20, 86, 75);
    text("  Felíz \n Navidad", 10,60)
    textSize(60);
    stroke(0);
    text("  Felíz \n Navidad", 15,60)
    textSize(60);
    stroke(0);
    fill("blue");
    circle(300, 100, 20);
    fill("orange");
    circle(300, 200, 20);
    fill("pink");
    circle(240, 200, 20);
    fill("cyan");
    circle(360, 200, 20);
    fill("red");
    circle(200, 300, 20);
    fill("yellow");
    circle(400, 300, 20);
    fill("purple");
    circle(300, 300, 20);
    
    stroke(255);

  for(var i = 0; i < 15; i = i +1){
     ellipse(x[i], y[i] ,h[i]);  
    if (y[i] > height) {
      y [i] = 0;
      //incremento[i] = incremento[i] * -1;
    }else if(y[i] <0 ){
      incremento[i] = incremento[i] * -1;
    }
    y[i] = y[i] + incremento[i];
  }
  }
  }
  
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}