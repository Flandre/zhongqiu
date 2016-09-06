/* init page size */
$('section').css({
  'width': $(window).width() < 540 ? $(window).width() : 540,
  'height': $(window).height()
});
/* page 1 */
function animation_step1() {
  $(".p1_moon").addClass("show");
  setTimeout(function () {
    $(".p1_bg").addClass("show");
    $(".p1_firefly_container").addClass("show");
    /* firefly plugin */
    $.firefly({
      color: '#ffd',
      minPixel: 3,
      maxPixel: 6,
      total: 20,
      borderRadius: '50%',
      on: '.p1_firefly_container'
    });
    setTimeout(function () {
      $(".p1_benediction").addClass("show");
      setTimeout(function () {

      }, 1600)
    }, 1600)
  }, 200);
}




/* 执行 */
animation_step1();