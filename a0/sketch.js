function setup() {
  // width x height
  createCanvas(800, 600);
  c = color('LightSkyBlue')
  background(c);
  // draw 3 clouds in background
  drawCloud(10,10);
  drawCloud(200,300);
  drawCloud(400,-200);
  noStroke();
}

function draw() {  
  // color lib
  leaf = color(255, 204, 0)
  tree_orig = color('GoldenRod')
  tree = color('DarkGoldenRod')
  outline = color('MediumOrchid')
  flower = color('DarkOrchid')
  ground_orig = color('ForestGreen')
  ground = color('DarkGreen')
  
  var s = second();
  var m = minute();
  var h = hour();
  
  let ss = map(s, 0, 60, height, 0);
  let mm = map(m, 0, 60, 0, width);
  let hh = map(h, 0, 24, 0, 330);
  
  // set grass
  fill(ground_orig);
  rect(0, 545, width, 65, 20);

  // set tree 
  fill(tree_orig);
  rect(width/2-50,213,100,330)
  
  // leaves change by second
  fill(leaf)
  ellipse(width/2, 125, ss, 250);
  stroke(outline); 
  
  // grass change by minute 
  fill(ground);
  rect(0, 545, mm, 65, 20);
  
  // tree change by hour
  fill(tree);
  rect(width/2-50,213,100,hh);
  
  // print minute when it changes
  if (s == 0) {
    console.log(m);
  }
}

function drawCloud(x,y){
  translate(x, y);
  stroke(245);
  ellipse(50,50,50,40);
  ellipse(80,45,50,40);
  ellipse(120,50,50,40);
  ellipse(95,55,40,30);
  ellipse(95,80,50,40);
  ellipse(65,70,50,40);
}
