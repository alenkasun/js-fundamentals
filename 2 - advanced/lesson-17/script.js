(function(){

	var links = document.getElementsByTagName("a");


	for (var i = 0, len = links.length; i < len; i++) {
		links[i].addEventListener("click", function(e) {
		var className = this.innerHTML.toLowerCase();
			document.body.className = className;
			e.preventDefault();
		}, false);
	}

}());