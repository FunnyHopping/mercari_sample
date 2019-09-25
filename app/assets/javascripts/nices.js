document.addEventListener('turbolinks:load',function(){
  function nice(triger,target,onclass,offclass){
    triger.on("ajax:success",function(e){
      let index = triger.index(this);
      if (target.eq(index).hasClass(offclass)){
        target.eq(index).removeClass(offclass).addClass(onclass)
      } else{
        target.eq(index).removeClass(onclass).addClass(offclass)
      }
    })
  }

  nice($(".nice-clearfix__btn-left__nice"),$(".nice-btn"),'icon-heart-border-on','icon-heart-border')

})