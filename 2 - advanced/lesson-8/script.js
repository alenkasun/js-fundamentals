(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton;   // retrieve button input element by name

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(evt){
    var target = eventUtility.getTarget(evt);
    target.disabled = true;   // lock access to the button
    alert("type: " + target.type + " | value: " + target.value);
    target.disabled = false;
});

}());