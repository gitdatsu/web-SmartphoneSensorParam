window.addEventListener("devicemotion",function(event){
  let acceleration = event.acceleration;
  let aig = event.accelerationIncludingGravity;
  let rotationRate = event.rotationRate;
  let interval = event.interval;

  let result = document.getElementById("motion");
  result.innerHTML =
    "acceleration = " + acceleration +
    "accelerationincludingGravity = " + aig +
    "rotationRate = " + rotationRate +
    "interval = " + interval;
})
