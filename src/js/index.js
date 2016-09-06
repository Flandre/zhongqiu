/* init page size */
$('section').css({
  'width': $(window).width() < 540 ? $(window).width() : 540,
  'height': $(window).height()
});

var hastouch = 'ontouchstart' in window ? true : false,
  tapstart = hastouch ? 'touchstart' : 'mousedown',
  tapend = hastouch ? 'touchend' : 'mouseup';
var page_y;

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
        $(".p1_next").addClass("show");
        $(".page_1")[0].addEventListener(tapstart, function (e) {
          e.preventDefault();
          e.stopPropagation();
          page_y = hastouch ? e.targetTouches[0].pageY : e.clientY;
        });
        $(".page_1")[0].addEventListener(tapend, function (e) {
          e.preventDefault();
          e.stopPropagation();
          if ((hastouch ? e.targetTouches[0].pageY : e.clientY) < page_y) {
            alert(true)
          }
        })
      }, 1600)
    }, 1600)
  }, 200);
}


/* 执行 */
animation_step1();