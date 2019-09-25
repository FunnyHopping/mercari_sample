$(document).on('turbolinks:load', function(){
    $(".delete-btn").on('click',function(){
      $(".delete-modal, .modal-inner").fadeIn();
    });
  $(".modal-btn-cancel, .delete-modal").on('click',function(){
      $(".delete-modal, .modal-inner").fadeOut();
    });
  });