const $textContainer = $('#textHero1, #textHero2, #textHero3');
const box = $('.hero-box');

$(window).on('scroll', function() {
  if ($(document).scrollTop() > 120) {
    $textContainer.css('transform', 'translateY(-100%)');
    box.css('transform', 'translateY(-100%)');
  } else {
    $textContainer.css('transform', 'translateY(0)');
    box.css('transform', 'translateY(0)');
  }
});