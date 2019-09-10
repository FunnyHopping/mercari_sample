document.addEventListener('turbolinks:load',function(){
  var year = ["--"]
  for (var i=0; i<80;i++){
    let dt = new Date();
    let y = dt.getFullYear() - (i+10);
    year.push(y)
  }
  var month = ["--"]
  for (var i=0; i<12;i++){
    month.push(i+1)
  }
  var day = ["--"]
  for (var i=0; i<31;i++){
    day.push(i+1)
  }

  function selectOption(arry,date){
    for (var i=0; i<arry.length;i++){
      if (arry[i] < 10){
        var val = "0" + arry[i] 
      }
      let op = `
                <option value=${val}>${arry[i]}</option>
               `
      date.append(op);
    }
  }

  selectOption(year,$(".year"))
  selectOption(month,$(".month"))

  function selectInput(date,child){
    date.on("change",function(){
      if ($(this).val() == "--"){
        child.children().remove()
      }else{
        selectOption(day,child)
      }
    })
  }
  selectInput($('.month'),$(".day"))
})