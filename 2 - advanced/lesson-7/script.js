(function(){

var txtbox = document.getElementById("txtInput");

eventUtility.addEvent(txtbox, "keypress", function(evt){
    var code = eventUtility.getCharCode(evt);
    // A 65
    // B 66
    // Z 90
    // a 97
    // z 122

    if ((code >= 65 && code <= 90)&&(code >= 97 && code <= 122)) {
        alert(code);
    }else {
        eventUtility.preventDefault();
    }

});

}());