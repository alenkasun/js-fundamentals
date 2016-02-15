(function(){

var divFoo = document.getElementById("foo"),
	style = divFoo.style;

divFoo.classList.add("css-class");
divFoo.classList.add("css-class2");

divFoo.classList.remove("css-class2");


}());