document.addEventListener('turbolinks:load',function(){
  $(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 400,
      pauseOnHover: true,
      arrows:true,
      dots:true,
      accessibility: true
    });
  });
});