document.addEventListener('turbolinks:load',function(){
  $('.error-text').hide()

  function nil_judge(target){
    if(!target.val()){
      target.next(".error-text").show();
      sendflag = false
    }else{
      target.next(".error-text").hide();
    }
  }

  function post_regular(target){
    var reg = new RegExp(/^\d{3}-?\d{4}$/g);
    if(!reg.test(target.val())){
      $(".error-post-reg").show();
      sendflag = false
    }else{
      $(".error-post-reg").hide();
    }
  }

  $('.step3-container__main__container__form').submit(function(){
    sendflag = true
    let post_num    = $('#address_post_num')
    let prefecture  = $('#prefecture_id')
    let city        = $('#address_city')
    let street      = $('#address_street_num')


    $("form").each(function(){
      $(this).find(":input").each(function(i,e){
        nil_judge($(e));
      }) 
    })

    post_regular(post_num)

    if(sendflag == false){
      return false
    }
  })
});