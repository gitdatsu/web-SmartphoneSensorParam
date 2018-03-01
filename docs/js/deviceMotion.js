window.addEventListener("devicemotion",function(event){
  let acceleration = event.acceleration;
  let aig = event.accelerationIncludingGravity;
  let rotationRate = event.rotationRate;
  let interval = event.interval;

  let result = getElementById("motion");
  result.innerHTML =
    "acceleration = " + acceleration.toFixed(1) +
    "accelerationincludingGravity = " + aig.toFixed(1) +
    "rotationRate = " + rotationRate.toFixed(1) +
    "interval = " + interval.toFixed(1);
})
