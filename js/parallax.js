function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || 'body',
        layers: options.layers || '.parallax__x-axis',
        deep: options.deep || 'data-parallax-deep',
        bgParallax: options.bgParallax || 'data-bg-parallax'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
       for(var i = 0; i < parallaxWrappers.length; i++){
   (function(i){
    parallaxWrappers[i].addEventListener('mousemove', function(e){
     console.log(window.innerWidth)
     var x = e.clientX-window.innerWidth / 2,
      y = e.clientY-window.innerHeight / 2,
      layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
     for(var j = 0; j < layers.length; j++){
            (function(j){
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  bgParallax = layers[j].getAttribute('data-bg-parallax')
                  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                  if(disallow && disallow === 'both') return;

                  if(bgParallax)
                    layers[j].style.transform = 'scale(1.2) translateX(' + (-itemX) + 'px) translateY(' + (-itemY) + 'px)';
                  else
                    layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);
     }
    })
   })(i);
       }
    };
    this.init();
    return this;
}

window.addEventListener("load", function(){
    new Parallax();
});
