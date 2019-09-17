document.addEventListener('turbolinks:load',function(){
  $(".good").on("click",function(){
    $(".divnormal").css('border-color','');
    $(".divbad").css('border-color','');
    $(".divgood").css('border-color','red');
    $("#transact_evaluat_valuenormal").prop('checked', false)
    $("#transact_evaluat_valuebad").prop('checked', false)
    $("#transact_evaluat_valuegood").attr('checked', true)
    $("#transact_evaluat_valuegood").prop('checked', true)
  })
  $(".normal").on("click",function(){
    $(".divbad").css('border-color','');
    $(".divgood").css('border-color','');
    $(".divnormal").css('border-color','red');
    $("#transact_evaluat_valuegood").prop('checked', false)
    $("#transact_evaluat_valuebad").prop('checked', false)
    $("#transact_evaluat_valuenormal").attr('checked', true)
    $("#transact_evaluat_valuenormal").prop('checked', true)
  })
  $(".bad").on("click",function(){
    $(".divnormal").css('border-color','');
    $(".divgood").css('border-color','');
    $(".divbad").css('border-color','red');
    $("#transact_evaluat_valuegood").prop('checked', false)
    $("#transact_evaluat_valuenormal").prop('checked', false)
    $("#transact_evaluat_valuebad").attr('checked', true)
    $("#transact_evaluat_valuebad").prop('checked', true)
  })

  $(".form__check").on("click",function(){
    console.log(1)
    var check = $("#transact_confirmat").prop('checked')
    if (check){
      $("#transact_confirmat").prop('checked', false)
      $(".form__check").css('background','#fff')
    }else{
      $("#transact_confirmat").prop('checked', true)
      $(".form__check").css('background','blue')
    }
  })

  let result = parseFloat($('.order-show-wrapper__lcontent__container__messages__content').css('height'));
  console.log(result)
  $('.order-show-wrapper').css('height', result + 1200 )

  $(".order-show-wrapper__lcontent__container__messages__content__form").on("submit",function(){
    let result = parseFloat($('.order-show-wrapper__lcontent__container__messages__content').css('height'));
    console.log(result)
    $('.order-show-wrapper').css('height', result + 1300 )
  })
})