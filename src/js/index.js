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


$.firefly({
  color: '#fff',
  minPixel: 1,
  maxPixel: 3,
  total : 65,
  on: 'header'
});
/* 执行 */
animation_step1();