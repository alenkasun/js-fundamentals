(function(){

	var buttons = document.getElementsByTagName("a");
	var buttonClick = function(e) {
		var target = eventUtility.getTarget(e),
			className = target.innerHTML.toLowerCase();

			eventUtility.preventDefault(e);
			document.body.className = className;
	};

	for (var i = 0, len = buttons.length; i < len; i++) { 
		eventUtility.addEvent(buttons[i], "click", buttonClick);		
	}

}());