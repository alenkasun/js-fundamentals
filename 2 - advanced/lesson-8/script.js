(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton,       // retrieve button input element by name
    textbox = form.myTextbox,
    textarea = form.myTextArea;

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(evt){
    var target = eventUtility.getTarget(evt);
    
    if (textbox.value === "") {
        alert("please input data in box");
        textbox.focus();
    }

    if (textarea.value === "") {
        alert("please input data in large box");
    }

});

}());