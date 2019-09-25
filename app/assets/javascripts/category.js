document.addEventListener('turbolinks:load',function(){
  $(".container__categories__visible__clearfix__link").on("click",function(){
    let header = $(this).attr('id') 
    $("html,body").animate({scrollTop:$(`#${header}-header`).offset().top - 20});
  })
  $(".top-moove-icon").on("click",function(){
    let header = $(this).attr('id') 
    $("html,body").animate({scrollTop:$(`.header`).offset().top - 20});
  })
})