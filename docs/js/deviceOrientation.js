window.addEventListener("deviceorientation", function(event){
  let alpha = event.alpha;
  let beta = event.beta;
  let gamma = event.gamma;

  let result = document.getElementById("orientation");
  result.innerHTML = "方位(°)<br />"+
    "方位（Z軸回りの回転角度:0～360）："+ alpha.toFixed(1) +"<br />" +
    "ピッチ（x軸回りの回転角度:-90～90）："+ beta.toFixed(1) +"<br />" +
    "ロール（y軸回りの回転角度：-90～270）："+ gamma.toFixed(1);
});
