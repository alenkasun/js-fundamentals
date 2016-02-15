(function(){

var pElements = document.getElementsByTagName("p"), // NodeList
	lastPElement = pElements[pElements.length - 1];

for (var i = 0, len = pElements.length; i < len; i++) {
	alert(pElements[i]);
}

console.log(lastPElement);

}());