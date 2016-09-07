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
      total: 10,
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
            setTimeout(function () {
              animation_step2();
            }, 1600)
          }
        })
      }, 1600)
    }, 1600)
  }, 200);
}

function animation_step2() {
  $(".p2_message").addClass("show");
  $(".p2_sender").addClass("show");
  setTimeout(function () {
    $(".p2_address_button")
      .addClass("show")
      .on('click', function () {
        $('.p2_modal').addClass('show');
        $('.p2_modal_container').addClass('show');
        /* 停止动画 */
        $('.message-container').stop();
      });
    $(".p2_qrcode").addClass("show");
    setTimeout(function () {
      runMessage()
    }, 3000)
  }, 1600)
}
function runMessage() {
  if ($('.p2_message').width() < $('.message-container').width()) {
    $('.message-container').animate({
      marginLeft: $('.p2_message').width() - $('.message-container').width()
    }, 15000, 'linear', function () {
      console.log('callback');
      $('.p2_message').on('click', function () {
        console.log('alert');
        $('.message-container').css('marginLeft', '0');
        setTimeout(function(){
          runMessage();
        },3000)
      })
    })
  }
}

/* modal */
$('.p2_modal_submit').on('click', function () {
  $('.p2_modal')
    .hide()
    .removeClass('show');
  $('.p2_modal_container')
    .hide()
    .removeClass('show');
  $('.popup')
    .addClass('fade-in show')
    .show();
  setTimeout(function () {
    $('.popup').removeClass('fade-in show');
    setTimeout(function () {
      $('.popup')
        .addClass('fade-out show')
        .hide();
      setTimeout(function () {
        $(".p2_address_button")
          .hide()
          .removeClass('show');
      }, 1500)
    })
  }, 1500);
  console.log($('#set_address').serialize());
  /* 恢复动画 */
  runMessage()
});
/* 执行 */
animation_step1();