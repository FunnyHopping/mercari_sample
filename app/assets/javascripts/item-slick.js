$(document).on('turbolinks:load', function(){
  $('.item-first').slick({
    slidesToShow: 10, //表示するスライドの数
    focusOnSelect: true, //フォーカスの有効化
    asNavFor: '.item-main-content__photo__slick__thumbnail__dot', //ナビゲーション
    variableWidth:true, //画像の大きさ変更
  });

    $('.item-main-content__photo__slick__thumbnail__dot').on( 'mouseover', function() {
      $(this).click() //マウスオーバーでクリック
      $(this).css('opacity', 1); //選択した画像のopacityをあげる
      $(this).siblings().css('opacity', 0.5); //それ以外のサムネイル画像のopacityを下げる
  });


});