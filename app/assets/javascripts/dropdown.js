$(document).on('turbolinks:load',function() {
  //親カテゴリーメニュー
  $(function(){

    $('.header__contents__bottom__left__category').hover(function(){
      $('.parents_list').show();
    }, function() {
      $('.parents_list').hide();
    }); 
  });

    //ブランドメニュー
  $(function(){
    $('.header__contents__bottom__left__brand').hover(function(){
      $('.dropdwn-menu2, .brand-dropdown__list').show();
    }, function() {
      $('.dropdwn-menu2, .brand-dropdown__list').hide();
    });
  });

   // 子カテゴリー
  $(function() {
      function buildChildHTML(child){
        var html =`<a class="child_category" id="${child.id}" 
                    href="/category/${child.id}">${child.name}</a>`;
        return html;
      }
    
      $(document).on("mouseover", ".parent_category", function () {
        
        var id = this.id//どのリンクにマウスが乗ってるのか取得します

        $.ajax({
          type: 'GET',
          url: '/pages/new',//とりあえずここでは、newアクションに飛ばしてます
          data: {parent_id: id},//どの親の要素かを送りますparams[:parent_id]で送られる
          dataType: 'json'
        }).done(function(children) {
          children.forEach(function (child) {//帰ってきた子カテゴリー（配列）
            var html = buildChildHTML(child);//HTMLにして
            $(".children_list").append(html);//リストに追加
          })
          $(document).on("mouseover", ".parent_category", function () {
            $(".child_category").remove();
        });        
      });
    });
      // 孫カテゴリ
      function buildGrandChildHTML(child){
        var html =`<a class="grand_child_category" id="${child.id}"
                   href="/category/${child.id}">${child.name}</a>`;
        return html;
      }
    
      $(document).on("mouseover", ".child_category", function () {//子カテゴリーのリストは動的に追加されたHTMLのため
        var id = this.id

        $.ajax({
          type: 'GET',
          url:'/pages/new',
          data: {parent_id: id},
          dataType: 'json'
        }).done(function(children) {
          children.forEach(function (child) {
            var html = buildGrandChildHTML(child);
            $(".grand_children_list").append(html);
          })
          $(document).on("mouseover", ".child_category, .parent_category", function () {
            $(".grand_child_category").remove();
          });
        });
      });
    });  
  });