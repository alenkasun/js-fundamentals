(function(){

var pElements = document.querySelectorAll("p"),
	pElement = document.querySelectorAll("div p"),
	pFooElement = document.querySelector("#foo");

alert(pElements.length); 
alert(pFooElement.parentNode.tagName);
console.log(pElement); 

}());