$(document).ready(function(){
  function updateNum() {
    document.getElementById("page-counter").innerText = (this_page+1) +  " / 3";
  }
  
  document.addEventListener('keydown',function(e){
    if (e.key == "ArrowLeft") $(".arrow.left").click();
    if (e.key == "ArrowRight") $(".arrow.right").click();
  });


  this_page = 0;
  max_page = 2;
  speed = 350;
  width = $('#page1').width() + 90;
  $(".arrow.right").click(function(){
    if (this_page < max_page) {
      this_page++;
      x = width * this_page;
      $('.pages').animate({scrollLeft:x,},speed);
      updateNum();
    }
  });
  $(".arrow.left").click(function(){
    if (this_page > 0) {
      this_page--;
      x = width * this_page;
      $('.pages').animate({scrollLeft:x,},speed);
      updateNum();
    }
  });
});
