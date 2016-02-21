(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton;   // retrieve button input element by name

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(){
    alert("You clicked me!");
});

}());