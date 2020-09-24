$(document).ready(function(){

  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, preventDefaults, false);
  });
  document.getElementsByClassName("search")[0].addEventListener('dragenter', function(e){
    document.body.classList.add("draggedFile");
  }, false);
  ;['dragleave', 'drop'].forEach(eventName => {
    document.getElementsByClassName("search")[0].addEventListener(eventName, function(e){
      document.body.classList.remove("draggedFile");
    }, false)
  });

  document.getElementsByClassName("search")[0].addEventListener('drop', function(e){
    var items = e.dataTransfer.items;
    for (var index=0; index<items.length; index++) {
      var item = items[index];
      console.log('Dropped file info: kind=' + item.kind + ', type=' + item.type);
      if (item.kind == "string" && item.type.match('^text/plain')) {
        var el = e.dataTransfer.getData('text/html');
        var bl = document.createElement('div');
        bl.innerHTML = el;
        var url = bl.getElementsByTagName('img')[0].getAttribute('src');
        //console.log("https://www.google.com/searchbyimage?&image_url="+url);
        window.location.href = "https://www.google.com/searchbyimage?&image_url="+url;
      }
    }
  });

  $(document).click(function() {
    if ($("#search").is(":focus") ) {
      $(".search").css({"backdrop-filter":"blur(5px)","box-shadow":"rgba(0, 0, 0, 0.5) 1px 1px 7px -3px"});
    } else {
      $(".search").css({"backdrop-filter":"","box-shadow":""});
    }
  });

  $("#search-button").click(function(){
    text = document.getElementById("search").value;
    location.href = "https://www.google.com/search?q=" + text + "&sourceid=chrome&ie=UTF-8";
  });

  document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    $("#search-button").click();
   }
  });
});
