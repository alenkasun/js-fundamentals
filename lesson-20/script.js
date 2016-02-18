(function(){


var mouseHandler = function (evt){
	var target = eventUtility.getTarget(evt),
		tagName = target.tagName,
		classData = target.getAttribute("data-body-class");	

	if (classData) {
		eventUtility.preventDefault(evt);
		if(evt.type === "mouseover") {
			document.body.className = classData;
		} else {
			document.body.className = "";
		}		
	}		
};

eventUtility.addEvent(document, "click", mouseHandler);
eventUtility.addEvent(document, "mouseover", mouseHandler);

}());