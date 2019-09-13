document.addEventListener('turbolinks:load',function(){
  $('.error-text').hide()

  function pass_regular(target){
    var reg = new RegExp(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/);
    if(!reg.test(target.val()) || !target.val()){
      $(".error-phone").show();
      sendflag = false
    }else{
      $(".error-phone").hide();
    }
  }

  $('.step2-container__main__container__form').submit(function(){
    sendflag = true
    let phone_num  = $('#user_phone_num')
    
    pass_regular(phone_num)
    
    if(sendflag == false){
      return false
    }
  })
});