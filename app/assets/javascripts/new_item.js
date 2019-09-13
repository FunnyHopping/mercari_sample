$(document).on("turbolinks:load",function() {
  function appendOption(select){
    let html = `<option value="${select.id}">${select.name}</option>`
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

  function postagePlanBox(insertHTML){
    let postagePlanBoxHTML = `<div class="form-group" id="postage-plan-box_list">
                                <label>配送の方法
                                  <span class="form-require">必須</span>
                                </label>
                                <div class="select-wrap">
                                  <i class="icon-arrow-bottom"></i>
                                  <select class="select-default" name="item[postage_id]">
                                  <option value="">---</option>
                                  ${insertHTML}
                                  </select>
                                </div>
                              </div>`
    $("#postage-select-box_list").append(postagePlanBoxHTML);
  }

  $(function() {
    $("#parent_form").on('change', function(){
      let parentValue = $(this).val();
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

    $(function() {
      $("#postage_form").on('change', function(){
        let postageValue = $(this).val();
        if(postageValue != ""){
          $.ajax({
            url: "/postages/get_postage_plan",
            type: "GET",
            data: {
              parent_id: postageValue
            },
            dataType: "json"
          })
          .done(function(plans){
            $("postage-plan-box_list").remove();
            let insertHTML = "";
            plans.forEach(function(plan){
              insertHTML += appendOption(plan);
            });
            postagePlanBox(insertHTML);
          })
          .fail(function(){
            alert("カテゴリー取得に失敗しました");
          })
        } else {
          $("#postage-plan-box_list").remove();
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


