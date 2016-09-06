/* init page size */
$('section').css({
  'width': $(window).width(),
  'height': $(window).height()
});
/* page 1 */
function animation_step1() {
  $(".p1_moon").addClass("show");
  setTimeout(function () {
    $(".p1_bg").addClass("show");
    setTimeout(function () {
      $(".p1_benediction").addClass("show");
      setTimeout(function () {

      }, 1600)
    }, 1600)
  }, 200);
}


/* firefly plugin */
$.firefly({
  color: '#ffd',
  minPixel: 3,
  maxPixel: 6,
  total: 20,
  borderRadius: '50%',
  on: '.page_1'
});

/* 执行 */
animation_step1();