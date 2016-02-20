(function(){
    try {
        alert("This code will not fial");
        abert("This code will fail");
        alert("This will not execute");
    } catch(err) {
        alert("An error occurred. Please try again later");
        alert(err.message);
    }

}());