var fps = document.getElementById("fps");
var ffps = 0;
var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      //console.clear();
      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
      ffps = (frame / ((time - startTime) / 1000)).toFixed(1);
      if(ffps < 30) {
        PARTICLES_PER_FIREWORK = ffps;
        //console.log("Particles per firework: " + PARTICLES_PER_FIREWORK);
        }
        else {
            PARTICLES_PER_FIREWORK = 80;
            //console.log("Particles per firework: " + PARTICLES_PER_FIREWORK);
        }
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();