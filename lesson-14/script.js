(function(){

var divFoo = document.getElementById("foo"),
	style = divFoo.style;

// style.color = "green";
style.border = "1px solid black";
style.backgroundColor = "yellow";
style.padding = "2px";

alert(style.color);   // empty alert popup

}());