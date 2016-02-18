(function(){

	var buttons = document.getElementsByTagName("a");
	var buttonClick = function(e) {
		var target = getTarget(e),
			className = target.innerHTML.toLowerCase();

			preventDefault(e);
			document.body.className = className;
	};

	for (var i = 0, len = buttons.length; i < len; i++) { 
		addEvent(buttons[i], "click", buttonClick);		
	}

}());