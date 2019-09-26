$(document).on("turbolinks:load",function() {
  $(function(){
    $(document).on('mouseover',".mypage-nav__list li > a", function(){
      $(this).css({"color":"#000","background":"#eee","font-weight":"600"})
    })
    $(document).on('mouseout',".mypage-nav__list li > a", function(){
      $(this).css({"color":"#333","background":"#fff","font-weight":"unset"})
    })
  })
});