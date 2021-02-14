window.addEventListener("load", function(){

function updateBg() {
  bg = "50% 50% / cover url(bg/background" + mode + ".jpg)";
  id("bg-container").changeCSS({
    'transition': 'background 0.6s',
    'background': bg
  });
  setTimeout(function(){id("bg-container").style.transition = "";}, 600);
}

 let mode_max = 15;
 let mode = randomInt(1, mode_max);
 updateBg();

  id("bg-button").addEventListener("click", function(){

    mode++;
    if (mode == mode_max+1) mode = 1;
    updateBg();
  });
});
