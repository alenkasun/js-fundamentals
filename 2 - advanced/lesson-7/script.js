(function(){

var txtbox = document.getElementById("txtInput");

eventUtility.addEvent(document, "keydown", function(evt){
    var code = evt.keyCode,          // code
        altKey = evt.altKey,         // true/false
        ctrlKey = evt.ctrlKey,       // true/false
        shirftKey = evt.shirftKey;   // true/false

    if (ctrlKey && code === 66) {
        alert("You pressed ctrl+B");
    }

});

}());