window.addEventListener("devicemotion",function(event){
  let acceleration = event.acceleration;
  let aig = event.accelerationIncludingGravity;
  let rotationRate = event.rotationRate;
  let interval = event.interval;

  let result = document.getElementById("motion");
  result.innerHTML =
    "acceleration = (" + acceleration.x + ", " + acceleration.y + ", " + acceleration.z + ")<br>" +
    "accelerationincludingGravity = (" + aig.x + ", " + aig.y + ", " + aig.z + ")<br>" +
    "rotationRate = (" + rotationRate.x + ", " + rotationRate.y + ", " + rotationRate.z + ")<br>" +
    "interval = " + interval;
})
