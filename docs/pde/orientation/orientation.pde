int i;

void setup(){
  size(window.innerWidth, 360);
  // size(600, 200);
  i = 0;

  background(0);
  noFill();
  strokeWeight(1);
}

void draw(){
  float alpha = g_alpha-180.0;
  float beta = g_beta;
  float gamma = g_gamma-90.0;

  stroke(0);
  strokeWeight(1);
  line(i, 0, i, height);

  strokeWeight(3);
  stroke(255,0,0);
  point(i, height/2 - alpha);
  stroke(0,255,0);
  point(i, height/2 - beta);
  stroke(0,0,255);
  point(i, height/2 - gamma);

  i<width ? i++ : i=0;

  text(gamma, 20, 20);
}
