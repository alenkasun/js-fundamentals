(function(){

	var buttons = document.getElementsByTagName("button");


	for (var i = 0, len = buttons.length; i < len; i++) {
		buttons[i].addEventListener("click", function(e) {
		var className = this.innerHTML.toLowerCase();
			document.body.className = className;
			alert("type: " + e.type + " | target: " + e.target);
		}, false);
	}

}());