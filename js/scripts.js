$(document).ready(function () {
    $('.js-open').on('click', function () {
      $('html').addClass('menu-open');
    });
  
    $('.js-close').on('click', function () {
      $('html').removeClass('menu-open');
    });
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 600) {
     $('.minilogo').addClass('fondo');
  } else {
     $('.minilogo').removeClass('fondo');
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 20) {
     $('.spotify_content').addClass('fondo');
  } else {
     $('.spotify_content').removeClass('fondo');
  }
});