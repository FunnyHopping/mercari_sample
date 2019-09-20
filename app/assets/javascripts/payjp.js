document.addEventListener('turbolinks:load',function(){
  if($("#token_submit").length){
      Payjp.setPublicKey("pk_test_b19c55cbe5e866a49ecdb4ce"); 
      var btn = document.getElementById("token_submit");
      btn.addEventListener("click", e => {
        e.preventDefault();
        let card = {
          number: document.getElementById("card_number").value,
          cvc: document.getElementById("cvc").value,
          exp_month: document.getElementById("exp_month").value,
          exp_year: document.getElementById("exp_year").value
        }; 
        console.log(card)
        Payjp.createToken(card, (status, response) => {
          if (status === 200) { 
            console.log("OK")
            $("#card_number").removeAttr("name");
            $("#cvc").removeAttr("name");
            $("#exp_month").removeAttr("name");
            $("#exp_year").removeAttr("name"); 
            $("#card_token").append(
              $('<input type="hidden" name="payjp-token">').val(response.id)
              ); 
              $("#card_form").submit();
              alert("登録が完了しました"); 
            } else {
              alert("カード情報が正しくありません。"); 
            }
        });
      });
  }
})