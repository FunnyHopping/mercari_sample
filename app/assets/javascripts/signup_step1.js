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

  function pass_same(target1,target2){
    if(target1.val() !== target2.val()){
      $(".error-passcon-same").show();
      sendflag = false
    }else{
      $(".error-passcon-same").hide();
    }
  }

  function pass_length(target){
    if(target.val().length > 128 || target.val().length < 7){
      $(".error-pass-length").show();
      sendflag = false
    }else{
      $(".error-pass-length").hide();
    }
  }

  function pass_regular(target){
    var reg = new RegExp(/^[a-zA-Z]*$/);
    var reg_num = new RegExp(/^[0-9]*$/)
    if(reg.test(target.val()) || reg_num.test(target.val())){
      $(".error-pass-regular").show();
      sendflag = false
    }else{
      $(".error-pass-regular").hide();
    }
  }

  function nil_judge_family_kana(target){
    if(!target.val()){
      $(".error-1byte-family-kana").remove()
      html = `
              <ul class = "error-text error-1byte-family-kana">
                <li>姓カナ を入力してください</li>
              </ul>
             `
      $(".error-1byte-first-kana").before(html)
      sendflag = false
    }else{
      $(".error-1byte-family-kana").remove()
    }
  }

  function nil_judge_family(target){
    if(!target.val()){
      $(".error-2byte-family").remove()
      html = `
              <ul class = "error-text error-2byte-family">
                <li>姓 を入力してください</li>
              </ul>
             `
      $(".error-2byte-first").before(html)
      sendflag = false
    }else{
      $(".error-2byte-family").remove()
    }
  }

  function nil_judge_birth(target1,target2,target3){
    console.log(target3.val())
    if( target1.val() == undefined || target2.val() == undefined || !target3.val() || target3.val() == undefined ){
      $(".error-birth").show();
      sendflag = false
    }else{
      $(".error-birth").hide();
    }
  }


  $('#signupform1').submit(function(){
    sendflag = true
    let name               = $('#user_name')
    let email              = $('#user_email')
    let pass               = $('#user_password')
    let pass_con           = $('#user_password_confirmation')
    let family_name       = $('#user_family_name')
    let first_name         = $('#user_first_name')
    let first_name_kana    = $('#user_first_name_kana')
    let family_name_kana   = $('#user_family_name_kana')
    let year               = $('.year')
    let month              = $('.month')
    let day                = $('.day')


    $("form").each(function(){
      $(this).find(":input").each(function(i,e){
        nil_judge($(e));
      }) 
    })

    pass_same(pass,pass_con)
    pass_length(pass)
    pass_regular(pass)
    nil_judge_family_kana(family_name_kana)
    nil_judge_family(family_name)
    nil_judge_birth(year,month,day)
    if(sendflag == false){
      return false
    }
  })
});