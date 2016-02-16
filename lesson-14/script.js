(function(){

var divFoo = document.getElementById("foo"),
	style = divFoo.style;

divFoo.classList.add("css-class");
divFoo.classList.add("css-class2");

var getStyle = function(el, cssProperty){
	if(typeof getComputedStyle !== "undefined"){
		return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
	} else {
		return el.currentStyle[cssProperty];
	}
};

var color = getStyle(divFoo,"color");
alert(color);


}());