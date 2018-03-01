window.addEventListener("devicemotion",function(event){
  let acceleration = event.acceleration;
  let aig = event.accelerationIncludingGravity;
  let rotationRate = event.rotationRate;
  let interval = event.interval;

  let result = document.getElementById("motion");
  result.innerHTML =
    "acceleration = " + acceleration + "<br>" +
    "accelerationincludingGravity = " + aig + "<br>" +
    "rotationRate = " + rotationRate + "<br>" +
    "interval = " + interval;
})
