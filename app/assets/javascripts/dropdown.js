$(document).on('turbolinks:load', function(){
  $(function(){
    $('.header__contents__bottom__left__brand').hover(function(){
      $('.dropdwn-menu, .brand-dropdown__list').show();
    }, function() {
      $('.dropdwn-menu, .brand-dropdown__list').hide();
    });
  });
});