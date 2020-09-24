$(document).ready(function(){

  $('.g-services-icon').click(function(){
    $('#g-services-container').css('visibility','visible');
    $('.g-services').css('max-height','350px');
    $('.g-services-icon').css({'visibility':'hidden','opacity':'0'});
  });

  $('#close-g-serivces').click(function(){
    $('#g-services-container').css('visibility','');
    $('.g-services').css('max-height','');
    $('.g-services-icon').css({'visibility':'','opacity':''});
  });

});