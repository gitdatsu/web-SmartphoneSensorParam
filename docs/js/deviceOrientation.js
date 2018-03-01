let g_absolute;
let g_alpha;
let g_beta;
let g_gamma;

window.addEventListener("deviceorientation", function(event){
  g_absolute = event.absolute;
  g_alpha = event.alpha;
  g_beta = event.beta;
  g_gamma = event.gamma;

  let result = document.getElementById("orientation");
  result.innerHTML = "方位(°)<br />"+
    "方位（Z軸回りの回転角度:0～360）："+ g_alpha.toFixed(1) +"<br />" +
    "ピッチ（x軸回りの回転角度:-90～90）："+ g_beta.toFixed(1) +"<br />" +
    "ロール（y軸回りの回転角度：-90～270）："+ g_gamma.toFixed(1);
});
