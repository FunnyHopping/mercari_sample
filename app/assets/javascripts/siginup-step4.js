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

  function card_regular(target){
    var reg = new RegExp(/^[0-9]*$/);
    if(!reg.test(target.val())){
      $(".error-num-reg").show();
      sendflag = false
    }else{
      $(".error-num-reg").hide();
    }
  }

  $('#token_submit').on("click",function(){
    sendflag = true
    let card_num    = $('#card_number')
    let cvc  = $('#cvc')

    $("form").each(function(){
      $(this).find(":input").each(function(i,e){
        nil_judge($(e));
      }) 
    })

    card_regular(card_num)

    if(sendflag == false){
      return false
    }
  })
});