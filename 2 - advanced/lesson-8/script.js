(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton,
    color = form.color;        // retrieve button input element by name

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(evt){
    var target = eventUtility.getTarget(evt),
        pickedColors = [];

    for(var i = 0, l = color.length; i < l; i++) {
        if(color[i].checked){
            pickedColors.push(color[i].value);
        }
    }
    alert(pickedColors.join(", "));
});

}());