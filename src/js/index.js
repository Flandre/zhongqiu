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
  minPixel: 3,
  maxPixel: 10,
  total : 10,
  borderRadius: '50%',
  on: '.page_1'
});
/* 执行 */
animation_step1();