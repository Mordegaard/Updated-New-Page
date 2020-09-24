$(document).ready(function(){

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateBg() {
  bg = "url(bg/background" + mode + ".jpg)";
  $('.bg-container').css('transition','background 0.6s');
  $('.bg-container').css('background-image', bg);
  setTimeout(function(){$('.bg-container').css('transition','');}, 600);
}

 let mode_max = 5;
 let mode = getRand(1, mode_max);
 updateBg();

  $(".bg-button").click(function(){

    mode++;
    if (mode == mode_max+1) mode = 1;
    updateBg();
  });
});