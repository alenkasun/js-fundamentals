(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton,
    color = form.color;        // retrieve button input element by name

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(evt){
    var target = eventUtility.getTarget(evt);

    color.checked = true;
    
});

}());