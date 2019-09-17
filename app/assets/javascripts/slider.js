$(document).on('turbolinks:load', function(){
  $('.slider__list').slick({
    autoplay:true,
    autoplaySpeed:3500,
    arrows: false,
    dots:true,
  });
});