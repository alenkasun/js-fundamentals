(function(){

eventUtility.addEvent(document, "click", function (evt){
	var target = eventUtility.getTarget(evt),
		tagName = target.tagName,
		classData = target.getAttribute("data-body-class");

		alert(classData);

	if (classData) {
		var className = target.innerHTML.toLowerCase();
		eventUtility.preventDefault(evt);
		document.body.className = className;
	}		
});

}());