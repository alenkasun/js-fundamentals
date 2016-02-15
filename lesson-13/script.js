(function(){

var pElement1 = document.getElementsByTagName("p"),
	pElement2 = document.querySelectorAll("p");
alert(pElement1.length);  // 5
alert(pElement2.length);  // 5

var el = document.createElement("p");
document.body.appendChild(el);

alert(pElement1.length);  // 6
alert(pElement2.length);  // 5

}());