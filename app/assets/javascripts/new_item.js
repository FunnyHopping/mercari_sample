$(document).on("turbolinks:load",function() {
  function appendOption(category){
    let html = `<option value="${category.id}">${category.name}</option>`
    return html;
  }

  function childBox(insertHTML){
    let childBoxHTML =`<div class="select-wrap" id="child_box">
                    <i class="icon-arrow-bottom"></i>
                    <select class="select-default" id="child_form" name="item[child_id]">
                      <option value="">---</option>
                      ${insertHTML}
                    </select>
                  </div>`
    $("#category-select-box_list").append(childBoxHTML);
  }

  function grandChildBox(insertHTML){
    let grandChildBoxHTML =`<div class="select-wrap" id="grandchild_box">
                    <i class="icon-arrow-bottom"></i>
                    <select class="select-default" id="grandchild_form" name="item[category_id]">
                      <option value="">---</option>
                      ${insertHTML}
                    </select>
                  </div>`
    $("#category-select-box_list").append(grandChildBoxHTML);
  }

  $(function() {
    $("#parent_form").on('change', function(){
      let parentValue = $(this).val();
      console.log(parentValue);
      if(parentValue != ""){
        $.ajax({
          url: "/categories/get_child_category",
          type: "GET",
          data: {
            parent_id: parentValue
          },
          dataType: "json"
        })
        .done(function(childs){
          $("#child_box").remove();
          $("#grandchild_box").remove();
          $("#size_box").remove();
          $("#brand_box").remove();
          let insertHTML = "";
          childs.forEach(function(child){
            insertHTML += appendOption(child);
          });
          childBox(insertHTML);
        })
        .fail(function(){
          alert("カテゴリー取得に失敗しました");
        })
      } else {
        $("#child_box").remove();
        $("#grandchild_box").remove();
        $("#size_box").remove();
        $("#brand_box").remove();
      }
    })
    $(function() {
      $("#category-select-box_list").on('change', "#child_form", function(){
        let childValue = $("#child_form").val();
        if(childValue != ""){
          $.ajax({
            url: "/categories/get_grandchild_category",
            type: "GET",
            data: {
              child_id: childValue
            },
            dataType: "json"
          })
          .done(function(grandchilds){
            $("#grandchild_box").remove();
            $("#size_box").remove();
            $("#brand_box").remove();
            let insertHTML = "";
            grandchilds.forEach(function(grandchild){
              insertHTML += appendOption(grandchild);
            });
            grandChildBox(insertHTML);
          })
          .fail(function(){
            alert("カテゴリー取得に失敗しました");
          })
        } else {
          $("#grandchild_box").remove();
          $("#size_box").remove();
          $("#brand_box").remove();
        }
      })
    })
  });
});


// 価格の手数料と利益の非同期
$(document).on("turbolinks:load",function() {
  $(function(){
    $("#item_price").on('input',function(){
      let price = $(this).val();
      let minPrice = 300
      let maxPrice = 9999999
      let fee = 10
      let tax = Math.floor(price / fee)
      let profit = price - tax
      let kanmaProfit = profit.toLocaleString()
      if(price >= minPrice && price <= maxPrice){
        $("#tax-text").text("¥" + tax);
        $("#profit-text").text(kanmaProfit);
      } else {
        $("#tax-text").text("ー");
        $("#profit-text").text("ー");
      }
    })
  })
});