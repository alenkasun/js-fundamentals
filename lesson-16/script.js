(function(){

onload = function () {

	var buttons = document.getElementsByTagName("button");

	for (var i = 0, len = buttons.length; i < len; i++) {
		buttons[i].onclick = function() {
			var className = this.innerHTML.toLowerCase();
			document.body.className = className;
		};
	}

}

}());