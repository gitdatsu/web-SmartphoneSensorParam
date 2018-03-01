int n;
float[] value;

void setup(){
  size(window.outerWidth, 200);
  // size(400,400);

  // n = window.outerWidth;
  // value = new float[n];

}

void draw(){
  background(0);

  noStroke();
  fill(255,0,0);
  ellipse(0,height-alpha,50,50);
  fill(0,255,0);
  ellipse(0,height-beta,50,50);
  fill(0,0,255);
  ellipse(0,height-gamma,50,50);

  //drawGraph(value);
}

void drawGraph(float[] _value){
  int l = _value.length;
  stroke(255);
  strokeWeight(2);
  for(int i=0;i<l;i++){
    point(i,_value[i]);
  }
}
