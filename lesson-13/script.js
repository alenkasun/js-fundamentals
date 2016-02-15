(function(){

var pElement = document.getElementsByTagName("p");
alert(pElement.length);  // 5

var el = document.createElement("p");
document.body.appendChild(el);

alert(pElement.length);  // 6

}());