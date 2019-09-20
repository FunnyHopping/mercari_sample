$(document).on('turbolinks:load', function(){
  $(function(){
    $('#menu2').hover(function(){
      $('.dropdwn_menu ul').show();
    }, function() {
      $('.dropdwn_menu ul').hide();
    });
  });
});