$(document).on('turbolinks:load', function(){

  $(function(){
    var slider = "#slider"; 
    var thumbnailItem = "#thumbnail-list .thumbnail-item"; 
    
    // サムネイル画像アイテムに data-index でindex番号を付与
    $(".thumbnail-item").each(function(){
     var index = $(thumbnailItem).index(this);
     $(this).attr("data-index",index);
    });
    
    // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
    $(slider).on('init',function(slick){
     var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
     $(".thumbnail-item"+'[data-index="'+index+'"]').addClass("thumbnail-current");
    });
  
    //slickスライダー初期化  
    $(slider).slick({
      arrows: false,
      infinite: false, 
    });


    //サムネイル画像アイテムをクリックしたときにスライダー切り替え
    $(".thumbnail-item").on('mouseover',function(){
      var index = $(this).attr("data-index");
      $(slider).slick("slickGoTo",index,false);
    });
    
    //サムネイル画像のカレントを切り替え
    $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
      $(".thumbnail-item").each(function(){
        $(this).removeClass("thumbnail-current");
      });
      $(".thumbnail-item"+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
    });
  });
  
  $(".thumbnail-item").on( 'mouseover', function() {
    $(this).click() //マウスオーバーでクリック
    $(this).css('opacity', 1); //選択した画像のopacityをあげる
    $(this).siblings().css('opacity', 0.5); //それ以外のサムネイル画像のopacityを下げる
  });
});