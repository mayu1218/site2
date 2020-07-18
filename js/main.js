// loading
// window.onload = function() {
//   const loading = document.getElementById('loading');
//   loading.classList.add('loaded');
// }
$(window).on('load', function(){
  $('#loading').fadeOut();
});


// slideshow
$('.slider').slick({
  // dots:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  fade: true,
  prevArrow:'<div class="prev">&lt;</div>',
  nextArrow:'<div class="next">&gt;</div>',
});

// ナビバー固定
$(function() {
  var offset = $('#header-nav').offset();

  $(window).scroll(function() {
    if ($(window).scrollTop() > offset.top) {
      $('#header-nav').addClass('fixed');
      $('#collection').addClass('top');
    } else {
      $('#header-nav').removeClass('fixed');
      $('#collection').removeClass('top');
    }
  });
});

// textアーチ
$('#curve').arctext({
  radius: 50
});
$('#curve2').arctext({
  radius: 50
});

$('#curve3').arctext({
  radius: 180
});
$('#curve4').arctext({
  radius: 180, dir: -1
});

$('#curve5').arctext({
  radius: 50
});
