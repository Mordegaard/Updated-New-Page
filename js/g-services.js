window.addEventListener("load", function(){

  id("gServicesButton").addEventListener("click", function(){
    id('gServicesContainer').changeVisible(true);
    id("gServicesButton").changeVisible(false);
  });

  id('close-g-serivces').addEventListener("click", function(){
    id('gServicesContainer').changeVisible(false);
    id("gServicesButton").changeVisible(true);
  });

});
