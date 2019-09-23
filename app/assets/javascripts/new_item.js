function previewAction(){
  let ul1Count = $("#preview_list").children().length
  let arrayCount = old_array.length + files_array.length
  $dropBox = $("#drop_box")
  $previewList = $("#preview_list")
  $previewList2 = $("#preview_list2")

  if(ul1Count < 5){
    $("#preview_list2").children().first().appendTo($("#preview_list"))
  }
  if(arrayCount == 10){
    $dropBox.hide()
  } else {
    $dropBox.show()
  }
  if(arrayCount == 0){
    $previewList.remove();
    $previewList2.remove();
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-0");
  } else if(arrayCount == 1) {
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-1");
  } else if(arrayCount == 2) {
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-2");
  } else if(arrayCount == 3) {
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-3");
  } else if(arrayCount == 4) {
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-4");
  } else if(arrayCount == 5) {
    $previewList2.remove();
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-0");
  } else if(arrayCount == 6) {
    $previewList2.css({"width":"116px","margin":0});
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-1");
  } else if(arrayCount == 7) {
    $previewList2.css({"width":"242px","margin":0});
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-2");
  } else if(arrayCount == 8) {
    $previewList2.css({"width":"368px","margin":0});
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-3");
  } else if(arrayCount == 9) {
    $previewList2.css({"width":"494px","margin":0});
    $dropBox.removeClass().addClass("single-main__box__sell__inner__form__upload__drop-4");
  } else if (arrayCount == 10) {
    $previewList2.css({"width":"620px","margin":0});
    $dropBox.removeClass().addClass("drop");
  } else {
    $dropBox.hide()
  }
}

$(document).on("turbolinks:load",function() {
  $(function(){
    $fileField = $("#item_images")
    files_array = []
    old_array = []

    if(document.URL.match("edit")){
      old_array = gon.img_array
    }

    $($fileField).on('change', $fileField, function(e) {
        files = e.target.files
        for (var i=0; i<files.length; i++) {
          if(old_array != null) {
            if (files_array.length >= 10 - old_array.length){
              break
            }
          }
        files_array.push(files[i])
        console.log(files_array)

        reader = new FileReader(),
        $previewBox = $("#preview_box");
        $previewList = $("#preview_list");
        $previewList2 = $("#preview_list2");
        if (old_array.length + files_array.length == 1){

            reader.onload = (function(e){
              let imgURI = e.target.result
              if($previewList.length == 0) {
                let preview =  `<ul id="preview_list">
                                  <li class="upload-sell-item">
                                    <figure class="upload-sell-figure">
                                      <img src="${imgURI}">
                                    </figure>
                                    <div class="upload-sell-btn">
                                      <a class="upload-sell-edit" href="/">編集</a>
                                      <a class="upload-sell-delete" href="/">削除</a>
                                    </div>
                                  </li>
                                </ul>`
    
                $previewBox.append(preview)
              } else {
                let preview =  `<li class="upload-sell-item">
                                  <figure class="upload-sell-figure">
                                    <img src="${imgURI}">
                                  </figure>
                                  <div class="upload-sell-btn">
                                    <a class="upload-sell-edit" href="/">編集</a>
                                    <a class="upload-sell-delete" href="/">削除</a>
                                  </div>
                                </li>`
  
                $previewList.append(preview)
              }
            });
            
          reader.readAsDataURL(files[i]);
        } else if (old_array.length + files_array.length < 6){
          if($previewBox.children().length == 2){
            $previewList2.remove();
          }
          reader.onload = (function(e){
            let imgURI = e.target.result
            let preview2 = `<li class="upload-sell-item">
                              <figure class="upload-sell-figure">
                                <img src="${imgURI}">
                              </figure>
                              <div class="upload-sell-btn">
                                <a class="upload-sell-edit" href="/">編集</a>
                                <a class="upload-sell-delete" href="/">削除</a>
                              </div>
                            </li>`
            $previewBox.children().append(preview2)
          });
        reader.readAsDataURL(files[i]);
        } else if(old_array.length + files_array.length == 6){
          reader.onload = (function(e){
            let imgURI = e.target.result
            if($previewList2.length == 0) {
              let preview =  `<ul id="preview_list2">
                                <li class="upload-sell-item">
                                  <figure class="upload-sell-figure">
                                    <img src="${imgURI}">
                                  </figure>
                                  <div class="upload-sell-btn">
                                    <a class="upload-sell-edit" href="/">編集</a>
                                    <a class="upload-sell-delete" href="/">削除</a>
                                  </div>
                                </li>
                              </ul>`
  
              $previewBox.append(preview)
            } else {
              let preview =  `<li class="upload-sell-item">
                                <figure class="upload-sell-figure">
                                  <img src="${imgURI}">
                                </figure>
                                <div class="upload-sell-btn">
                                  <a class="upload-sell-edit" href="/">編集</a>
                                  <a class="upload-sell-delete" href="/">削除</a>
                                </div>
                              </li>`

              $previewList2.append(preview)
            }
          });
        reader.readAsDataURL(files[i]);
        } else if(old_array.length + files_array.length <= 10){
          reader.onload = (function(e){
            let imgURI = e.target.result
            let preview =  `<li class="upload-sell-item">
                              <figure class="upload-sell-figure">
                                <img src="${imgURI}">
                              </figure>
                              <div class="upload-sell-btn">
                                <a class="upload-sell-edit" href="/">編集</a>
                                <a class="upload-sell-delete" href="/">削除</a>
                              </div>
                            </li>`

            $previewBox.children().next().append(preview)
          });
        reader.readAsDataURL(files[i]);
        }
      }
      previewAction()
    })      

    num_array = []
    $(document).on('click','#preview_box .upload-sell-delete', function(e){
      e.preventDefault();
      var index = $("#preview_box .upload-sell-delete").index(this);
      if(document.URL.match("edit")){
        var num = $(this).parent().parent().attr('id');
        if(num != undefined){
        num_array.push(num)
        }
      }
      if(index <= old_array.length -1){
      old_array.splice(index, 1);
      console.log(old_array)
      } else {
      files_array.splice(index - old_array.length, 1);
      console.log(files_array)
      }
      $(this).parent().parent().remove();
      previewAction()
    });

    $("#form_with").on('submit', function(e){
      e.preventDefault();
      var formData = new FormData($(this).get(0));
      files_array.forEach(function(file){
        formData.append("new_images[images][]", file)
      })
      $.ajax ({
        url: '/items',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
      })
      .done(function(val){
        console.log("OK");
      })
      .fail(function(val){
        console.log("NG");
      })
    })
    $("#form_with_edit").on('submit', function(e){
      e.preventDefault();
      var formData = new FormData($(this).get(0));
      let id = gon.item.id
      
      files_array.forEach(function(file){
        formData.append("new_images[images][]", file)
      })
      num_array.forEach(function(file){
        formData.append("new_images[num][]", file)
      })
      console.log(num_array)
      if(files_array.length != 0 || old_array.length != 0){
        $.ajax ({
          url: '/items/' + id,
          type: 'PUT',
          data: formData,
          contentType: false,
          processData: false,
        })
        .done(function(val){
          console.log("OK");
        })
        .fail(function(val){
          console.log("NG---");
        })
      } else {
        alert("画像が一枚もありません")
        window.location.reload();
      }
    })
  })
});

$(document).on("turbolinks:load",function() {
  $dropArea = $("#drop_box")

  $dropArea.on('dragover', function(e){
    e.stopPropagation();
    e.preventDefault();
  }, false)
  $dropArea.on('drop', function(e){

  })
})

                    
      // ネスト構造のセレクトボックスの段階表示
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
    $("#parent_box").after(childBoxHTML);
  }

  function grandChildBox(insertHTML){
    let grandChildBoxHTML =`<div class="select-wrap" id="grandchild_box">
                              <i class="icon-arrow-bottom"></i>
                              <select class="select-default" id="grandchild_form" name="item[category_id]">
                                <option value="">---</option>
                                ${insertHTML}
                              </select>
                            </div>`
    $("#child_box").after(grandChildBoxHTML);
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

    // ブランドのインクリメンタルサーチ
$(document).on("turbolinks:load",function() {
  var addResult = $("#search_brand_result");

  function brandHit(brand) {
    var html = `<li id="${brand.id}" class="brand_box_list">${brand.name}</li>`
    addResult.append(html);
  }
  $(function(){
    $("#input_brand_box").on("keyup", function() {
      var input = $("#input_brand_box").val();
      $.ajax({
        type: 'GET',
        url: '/brands/search_brand',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(brands) {
          $("#search_brand_result").children().remove();
        if(input == ""){
          $("#search_brand_result").children().remove();
          return
        }
        if (brands.length !== 0) {
          brands.forEach(function(brand) {
            brandHit(brand);
          });
        }
      })
      .fail(function() {
        console.log('NG');
      });
    });
  })
});

    // インクリメンタルサーチ候補の非同期
$(document).on("turbolinks:load",function() {
  $(function(){
    $(document).on('mouseover',"#search_brand_result > li", function(){
      $(this).css({"color":"#fff","background":"#0099e8"})
    })
    $(document).on('mouseout',"#search_brand_result > li", function(){
      $(this).css({"color":"#333","background":"#fff"})
    })
    $(document).on('click',"#search_brand_result li", function(){
      let brandText = $(this).text();
      let brandId = $(this).attr("id");
      $("#input_brand_box").val(brandText);
      $("#item_brand_id").val(brandId);
      $("#search_brand_result > li").remove()
    })
  })
});


// 価格の手数料と利益の非同期
function priceView(){
  let price = $("#item_price").val();
  let minPrice = 300
  let maxPrice = 9999999
  let fee = 10
  let tax = Math.floor(price / fee)
  let profit = price - tax
  let kanmaProfit = profit.toLocaleString()
  if(price >= minPrice && price <= maxPrice){
    $("#tax-text").text("¥" + tax.toLocaleString());
    $("#profit-text").text("¥" + kanmaProfit);
  } else {
    $("#tax-text").text("ー");
    $("#profit-text").text("ー");
  }
}

$(document).on("turbolinks:load",function() {
  $(function(){
    $("#item_price").on('input',function(){
      priceView()
    })
    if(document.URL.match("edit")){
      priceView()
    }
  })
});





$(document).on("turbolinks:load",function() {
  $(function() {
    if(document.URL.match("edit")){
      if (gon.item.size != null){
        $("#item_size").val(gon.item.size)
      }
      $("#item_condition").val(gon.item.condition)
      $("#item_shipping_date").val(gon.item.shipping_date)
    }
  });
});


