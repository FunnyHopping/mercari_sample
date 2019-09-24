$(document).on('turbolinks:load', function(){
    
  //カテゴリーメニュー
  $(function(){
    $('.header__contents__bottom__left__category').hover(function(){
      $('.parent-menu').show();
    }, function() {
      $('.parent-menu').hide();
    });
  });

    //ブランドメニュー
  $(function(){
    $('.header__contents__bottom__left__brand').hover(function(){
      $('.dropdwn-menu2, .brand-dropdown__list').show();
    }, function() {
      $('.dropdwn-menu2, .brand-dropdown__list').hide();
    });
  });
});
