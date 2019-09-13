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

  $('#new_user').submit(function(){
    sendflag = true
    let email              = $('#user_email')
    let pass               = $('#user_password')


    $("form").each(function(){
      $(this).find(":input").each(function(i,e){
        nil_judge($(e));
      }) 
    })
    if(sendflag == false){
      return false
    }
  })
});