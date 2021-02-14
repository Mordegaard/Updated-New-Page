window.addEventListener("load", function(){
  function updateNum() {
    document.getElementById("page-counter").innerText = (this_page+1) +  " / 3";
  }

  document.addEventListener('keydown',function(e){
    if (e.key == "ArrowLeft") id("arrowLeft").click();
    if (e.key == "ArrowRight") id("arrowRight").click();
  });

  var this_page = 0;
  const max_page = 2,
        width = id('page1').offsetWidth,
        pg = cl("pages")[0];
  id("arrowRight").addEventListener("click", function(){
    if (this_page < max_page) {
      this_page++;
      x = width * this_page;
      pg.scrollTo(x,0);
      updateNum();
    }
  });
  id("arrowLeft").addEventListener("click", function(){
    if (this_page > 0) {
      this_page--;
      x = width * this_page;
      pg.scrollTo(x,0);
      updateNum();
    }
  });
});
