(function(){

	var buttons = document.getElementsByTagName("button");
	var buttonClick = function() {
		alert("checking cross-browser event handling");
	};

	for (var i = 0, len = buttons.length; i < len; i++) {
		addEvent(buttons[i], "click", buttonClick);
	}

}());