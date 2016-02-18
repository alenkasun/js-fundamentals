(function(){

eventUtility.addEvent(document, "click", function (evt){
	var target = eventUtility.getTarget(evt),
		tagName = target.tagName,
		classData = target.getAttribute("data-body-class");	

	if (classData) {
		eventUtility.preventDefault(evt);
		document.body.className = "";
	}		
});

eventUtility.addEvent(document, "mouseover", function (evt){
	var target = eventUtility.getTarget(evt),
		tagName = target.tagName,
		classData = target.getAttribute("data-body-class");

	if (classData) {
		eventUtility.preventDefault(evt);
		document.body.className = classData;
	}		
});

}());