$(document).on("turbolinks:load",function() {
  $(function(){
    $(document).on('mouseover',".mypage-nav__list li > a", function(){
      $(this).css({"color":"#000","background":"#eee","font-weight":"600"})
    })
    $(document).on('mouseout',".mypage-nav__list li > a", function(){
      $(this).css({"color":"#333","background":"#fff","font-weight":"unset"})
    })
  })

  $(".mypage-item-link").on('click', function(e){
    e.preventDefault();
    $(".mypage-modal").fadeIn();
    $("body").css("overflow", "hidden")
  });
  $(".icon-close").on('click', function(){
    $(".mypage-modal").fadeOut();
    $("body").css("overflow", "auto");
  })
  $(".mypage-modal-box").on('click', function(){
    $(".mypage-modal").fadeOut();
    $("body").css("overflow", "auto");
  })

  $("#news-tabs .news-tab").on('click', function(e){
    e.preventDefault();
    $("#news-tabs").children().removeClass();
    $("#news-tabs").siblings().children().removeClass('active');
    $(this).parent().parent().addClass('active');
    $("#mypage-tab-news").addClass('active');
  })
  $("#news-tabs .todo-tab").on('click', function(e){
    e.preventDefault();
    $("#news-tabs").children().removeClass();
    $("#news-tabs").siblings().children().removeClass('active');
    $(this).parent().parent().addClass('active');
    $("#mypage-tab-todo").addClass('active');
  })
  $("#order-tabs .now-order-tab").on('click', function(e){
    e.preventDefault();
    $("#order-tabs").children().removeClass();
    $(this).parent().parent().addClass('active');
  })
  $("#order-tabs .ordered-tab").on('click', function(e){
    e.preventDefault();
    $("#order-tabs").children().removeClass();
    $(this).parent().parent().addClass('active');
  })

});

