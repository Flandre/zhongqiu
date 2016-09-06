/* init page size */
$('section').css({
  'width': $(window).width() < 540 ? $(window).width() : 540,
  'height': $(window).height()
});

$('.main').css({
  'height': $(window).height()
});

/* sound controller */
$('.music-icon').on('click', function () {
  event.stopPropagation();
  if ($('.music-icon').hasClass('music-icon-active') && !$('#background-audio')[0].paused) {
    $('.music-icon').toggleClass('music-icon-active');
    $('#background-audio')[0].pause();
  } else {
    $('.music-icon').toggleClass('music-icon-active');
    $('#background-audio')[0].play();
  }
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
      $(".p1_change").addClass("show");
      setTimeout(function () {
        $(".p1_next").addClass("show");
        $(".page_1")[0].addEventListener(tapstart, function (e) {
          e.preventDefault();
          e.stopPropagation();
          page_y = hastouch ? e.changedTouches[0].pageY : e.clientY;
        });
        $(".page_1")[0].addEventListener(tapend, function (e) {
          e.preventDefault();
          e.stopPropagation();
          if ((hastouch ? e.changedTouches[0].pageY : e.clientY) < page_y) {
            $(".page_2").addClass("show");
            setTimeout(function(){
              animation_step2();
            },1600)
          }
        })
      }, 1600)
    }, 1600)
  }, 200);
}

function animation_step2(){
  
}

/* 执行 */
animation_step1();