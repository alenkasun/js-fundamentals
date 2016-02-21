(function(){

var form = document.getElementById("theForm"),  // to retrieve data from form elements
    button = form.myButton,
    select = form.dayOfWeek;       // retrieve button input element by name

eventUtility.addEvent(form, "submit", function(){
    eventUtility.preventDefault();
});

eventUtility.addEvent(button, "click", function(evt){
    var target = eventUtility.getTarget(evt);
    
    var index = select.selectedIndex;
    var option = select.options[index];
    
    select.remove(3);
    var wedOption = new Option("Wednesday", 3);
    //select.options[select.options.length] = wedOption;
    //select.options[3] = wedOption;
    select.add(wedOption, select.options[1]);
});

}());