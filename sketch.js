let x = 0;
let y= 0;
let spacing = 40;



function setup() {
  createCanvas(1000, 1000);
  background(random(245));

}

function draw() {

  stroke(random(25));

  if (random(1) < 0.7){
    line(x, y, x + spacing, y + spacing);
  } else{
    line(x, y, x + spacing,y);
  }
  x = x + spacing;
  
  if (x > width) {
    x = 10;
    y = y + spacing;

  }


  if (random(4) < 0.2){
    line(x, y, x + spacing, y + spacing);
  } else{
    line(x, y, x + spacing,y);
  }
  x = x + spacing;
  
  if (x > width) {
    x = 0;
    y = y + spacing;

  }

  if (random(9) < 0.3){
    line(x, y, x + spacing, y + spacing);
  } else{
    line(x, y, x + spacing,y);
  }
  x = x + spacing;
  
  if (x > width) {
    x = 10;
    y = y + spacing;

  }
  

  

}
