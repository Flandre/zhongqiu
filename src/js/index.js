$('section').css({
  'width': $(window).width(),
  'height': $(window).height()
});


function animation_step1(){
  $(".p1_moon").addClass("show");
  setTimeout(function(){
    $(".p1_bg").addClass("show");
    setTimeout(function(){
      $(".p1_benediction").addClass("show")
    }, 1600)
  },200);
}
animation_step1();