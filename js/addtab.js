$(document).ready(function(){
  function updateTabs() {
    for (var i = 0; i < arr.length; i++) {
      if (localStorage.getItem("url"+i) != undefined && localStorage.getItem("name"+i) != undefined) {
        arr[i].classList.add("added");
        var pic = localStorage.getItem("picture"+i);
        var name = localStorage.getItem("name"+i);
        var url = localStorage.getItem("url"+i);
        if (pic == "") pic = "\u0022\u0022";
        $(arr[i]).html('<img src=' + pic + '><p>' + name + '</p><div class="flexed changeTab"><img src="icons/pencil.svg" width="14"/></div>');
        $(arr[i]).closest("a").attr("href", url);
      }
    }
  return;
  }

  var pressed;
  var arr = document.getElementsByClassName("plus");
  var overflow = document.getElementById("overflow_container");

  $(".link.plus").click(function() {
    if (!this.classList.contains("added"))
    overflow.classList.add("visible");
    for (var i = 0; i < arr.length; i++) if (this == arr[i]) pressed = i;
    $(".overflow input").val("");
  });

  $(".overflow_black").click(function() {
    overflow.classList.remove("visible");
  });

  $("#addTab").click(function(){
    var name = document.getElementById("name").value;
    var url = document.getElementById("url").value;
    var picture = document.getElementById("picture").value;
    if (name != "" && url != "") {
    localStorage.setItem("name" + pressed, name);
    localStorage.setItem("url" + pressed, url);
    localStorage.setItem("picture" + pressed, picture);
    overflow.classList.remove("visible");
    updateTabs();
    } else {
      if (name == "") document.getElementById("name").classList.add("redLine");
      if (url == "") document.getElementById("url").classList.add("redLine");
    }
  });

  $("#removeTab").click(function(){
    localStorage.removeItem("name" + pressed);
    localStorage.removeItem("url" + pressed);
    localStorage.removeItem("picture" + pressed);
    arr[pressed].innerHTML = '<p style="font-size: 4em; margin: 0px;">+</p>';
    arr[pressed].classList.remove("added");
    arr[pressed].parentElement.removeAttribute("href");
    overflow.classList.remove("visible");
  });

  $(document).on("click",".changeTab",function() {
    overflow.classList.add("visible");
    for (var i = 0; i < arr.length; i++) if ($(this).closest("link") == arr[i]) pressed = i;
    document.getElementById("name").value = localStorage.getItem("name"+pressed);
    document.getElementById("url").value = localStorage.getItem("url"+pressed);
    document.getElementById("picture").value = localStorage.getItem("picture"+pressed);
    return false;
  });

  $("input").click(function() {
    this.classList.remove("redLine");
  });

  updateTabs();
});
