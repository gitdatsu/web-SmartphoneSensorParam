let acceleration;
let aig;
let rotationRate;
let interval;

window.addEventListener("devicemotion",function(event){
  acceleration = event.acceleration;
  aig = event.accelerationIncludingGravity;
  rotationRate = event.rotationRate;
  interval = event.interval;

  let result = document.getElementById("motion");
  result.innerHTML =
    "acceleration = (" + acceleration.x.toFixed(0) + ", " + acceleration.y.toFixed(0) + ", " + acceleration.z.toFixed(0) + ")<br>" +
    "accelerationincludingGravity = (" + aig.x.toFixed(0) + ", " + aig.y.toFixed(0) + ", " + aig.z.toFixed(0) + ")<br>" +
    "rotationRate = (" + rotationRate.alpha.toFixed(0) + ", " + rotationRate.beta.toFixed(0) + ", " + rotationRate.gamma.toFixed(0) + ")<br>" +
    "interval = " + interval;
});
