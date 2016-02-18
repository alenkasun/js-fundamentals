(function(){

eventUtility.addEvent(document, "click", function (evt){
	var target = eventUtility.getTarget(evt),
		tagName = target.tagName;

	if (tagName === 'A' || tagName === "BUTTON") {
		var className = target.innerHTML.toLowerCase();
		eventUtility.preventDefault(evt);
		document.body.className = className;
	}		
});

}());