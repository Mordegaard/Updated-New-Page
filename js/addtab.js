window.addEventListener("load", function(){

  function updateTabs() {
    for (var i = 0; i < arr.length; i++) {
      if (localStorage.getItem("url"+i) && localStorage.getItem("name"+i)) {
        arr[i].classList.add("added");
        var pic = localStorage.getItem("picture"+i);
        var name = localStorage.getItem("name"+i);
        var url = localStorage.getItem("url"+i);
        arr[i].classList.remove("plus");
        arr[i].innerHTML = '<img src=' + pic + '><p>' + name + '</p><div class="flexed changeTab"><img src="icons/pencil.svg" width="14"/></div>';
        arr[i].closest("a").setAttribute("href", url);
        arr[i].cl("changeTab")[0].addEventListener("click", function(e){
          e.preventDefault();
          overflow.classList.add("visible");
          pressed = [].indexOf.call(arr, this.parentElement);
          document.getElementById("name").value = localStorage.getItem("name"+pressed);
          document.getElementById("url").value = localStorage.getItem("url"+pressed);
          document.getElementById("picture").value = localStorage.getItem("picture"+pressed);
          return false;
        });
      }
    }
  return;
  }

  var pressed;
  const arr = cl("link");
  const overflow = id("overflow_container");
  updateTabs();

  [].forEach.call(cl("plus"), function(bl, a){
    bl.addEventListener("click", function(){
      overflow.classList.add("visible");
      pressed = [].indexOf.call(arr, this);
      [].forEach.call(overflow.tag("input"), el => {el.value = ""});
    });
  });

  id("overflow_black").addEventListener("click", function(){
    overflow.classList.remove("visible");
  });

  id("addTab").addEventListener("click", function(){
    var name = id("name").value;
    var url = id("url").value;
    var picture = id("picture").value;
    if (name != "" && url != "") {
      localStorage.setItem("name" + pressed, name);
      localStorage.setItem("url" + pressed, url);
      localStorage.setItem("picture" + pressed, picture);
      overflow.classList.remove("visible");
      updateTabs();
    } else {
      if (name == "") id("name").classList.add("redLine");
      if (url == "") id("url").classList.add("redLine");
    }
  });

  id("removeTab").addEventListener("click", function(){
    localStorage.removeItem("name" + pressed);
    localStorage.removeItem("url" + pressed);
    localStorage.removeItem("picture" + pressed);
    arr[pressed].innerHTML = '<p>+</p>';
    arr[pressed].setAttribute("class", "link flexed plus");
    arr[pressed].parentElement.removeAttribute("href");
    overflow.classList.remove("visible");
  });

  [].forEach.call(overflow.tag("input"), el => {
    el.addEventListener("click", function(){
      this.classList.remove("redLine");
    });
  });
});
