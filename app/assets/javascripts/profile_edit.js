document.addEventListener('turbolinks:load',function(){
  $(function(){
    if($('#succes').length){
      $('#succes').delay(3000).fadeOut("slow");
    }
});
})