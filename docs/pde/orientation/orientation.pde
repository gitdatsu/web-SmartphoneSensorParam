void setup(){
  size(window.outerWidth, 200);
  // size(600, 200);
}

void draw(){
  background(0);

  noStroke();
  fill(255,0,0);
  ellipse(width/2, height-g_alpha, 50, 50);
  fill(0,255,0);
  ellipse(width/2, height-g_beta, 50, 50);
  fill(0,0,255);
  ellipse(width/2 ,height-g_gamma, 50, 50);

  stroke(255);
  text(window.outerWidth, 20, 20);
}

void drawGraph(float[] _value){
  int l = _value.length;
  stroke(255);
  strokeWeight(2);
  for(int i=0;i<l;i++){
    point(i,_value[i]);
  }
}
