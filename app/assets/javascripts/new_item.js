function previewAction(){
  let ul1Count = $("#preview_list").children().length
  let arrayCount = files_array.length
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
  }
}

$(document).on("turbolinks:load",function() {
  $(function(){
    $fileField = $("#item_images")
    files_array = []
    
    $($fileField).on('change', $fileField, function(e) {
      files = e.target.files
      result = e.target.result
      for (var i=0; i<files.length; i++) {

      files_array.push(files[i])

      reader = new FileReader(),
      $previewBox = $("#preview_box");
      $previewList = $("#preview_list");
      $previewList2 = $("#preview_list2");
        if (files_array.length == 1){
          if($previewBox.children().length == 2){
            $previewBox.pop();
          }
            reader.onload = (function(e){
              let imgURI = e.target.result
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
            });
            
          reader.readAsDataURL(files[i]);
        } else if (files_array.length < 6){
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
        } else if(files_array.length == 6){
          reader.onload = (function(e){
            let imgURI = e.target.result
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
          });
        reader.readAsDataURL(files[i]);
        } else if(files_array.length <= 10){
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

    $(document).on('click','#preview_box .upload-sell-delete', function(e){
      e.preventDefault();
      var index = $("#preview_box .upload-sell-delete").index(this);
      files_array.splice(index, 1);
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


    // 現状の動作確認保存用
// $(document).on("turbolinks:load",function() {
//   $(function(){
//     $fileField = $("#item_images")
    
//     targetFiles_array = []
//     targetResult_array = []
//     $($fileField).on('change', $fileField, function(e) {
//       $.each(e.target.files, function(i,val){
//       file = e.target.files[i]
//       reader = new FileReader(),    
//         $preview = $("#preview_list");
        
//         reader.onload = (function(file){
//           return function(e){
//             let img = $('<img>').attr({src: e.target.result})
//             let previewBox = `<li class="upload-sell-item">
//                               <figure class="upload-sell-figure">
//                               <img src="${img[0].src}">
//                               </figure>
//                               <div class="upload-sell-btn">
//                               <a class="upload-sell-edit" href="/">編集</a>
//                               <a class="upload-sell-delete" href="/">削除</a>
//                               </div>
//                               </li>`
//             $preview.append(previewBox)
//           }
//         })(file);
//         reader.readAsDataURL(file);
//       })
//     })
//   })
// });
                    
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


