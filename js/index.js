$("#addItem").click(itemAdd)
$("#checkBox").click(textMark)

function itemAdd(e){
e.preventDefault()
let newItem = $("#newText").val()
$("#lista").append(` <div id="nani"><br><label name=textoo>${newItem} </label> <br>  <br> <input type="button" value="check" id="checkBox" /><input type="button" value="delete" /> </div>  `)
}
  function textMark(){
   alert("ola")
    
    
}
  