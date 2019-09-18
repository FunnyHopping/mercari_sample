$(document).on('turbolinks:load', function(){
  $('.slick').slick({
    autoplay:true,
    autoplaySpeed:3500,
    dots:true,
    prevArrow:`<i class="slider-arrow__left"></i>`,
    nextArrow:`<i class="slider-arrow__right"></i>`,
  });
});