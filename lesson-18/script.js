(function(){

	var links = document.getElementsByTagName("a");


	for (var i = 0, len = links.length; i < len; i++) {
	// use attachEvent instead addEventListener and prefix "on..."" for IE8 and below
		links[i].attachEvent("onclick", function() {
			var clasName = event.srcElement.innerHTML.toLowerCase();

			alert(event.type);            // use event
			alert(event.srcElement);      // use srcElement for IE8 and below instead target
			event.returnValue  = false;   // instead event.preventDefault()

			document.body.className = className;
		});
	}

}());