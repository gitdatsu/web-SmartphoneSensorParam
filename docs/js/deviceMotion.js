window.addEventListener("devicemotion",function(event){
  let acceleration = event.acceleration;
  let aig = event.accelerationIncludingGravity;
  let rotationRate = event.rotationRate;
  let interval = event.interval;

  let result = document.getElementById("motion");
  result.innerHTML =
    "acceleration = (" + acceleration.x.toFixed(1) + ", " + acceleration.y.toFixed(1) + ", " + acceleration.z.toFixed(1) + ")<br>" +
    "accelerationincludingGravity = (" + aig.x.toFixed(1) + ", " + aig.y.toFixed(1) + ", " + aig.z.toFixed(1) + ")<br>" +
    "rotationRate = (" + rotationRate.x.toFixed(1) + ", " + rotationRate.y.toFixed(1) + ", " + rotationRate.z.toFixed(1) + ")<br>" +
    "interval = " + interval;
});
