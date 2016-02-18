(function(){

	var buttons = document.getElementsByTagName("button");
	var buttonClick = function(e) {
		alert('checking cross-browser props: target ' + getTarget(e));
	};

	for (var i = 0, len = buttons.length; i < len; i++) {
		addEvent(buttons[i], "click", buttonClick);		
	}

}());