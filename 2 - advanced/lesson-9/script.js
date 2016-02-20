var xhr = new XMLHttpRequest();

xhr.open("GET", "textfile.txt", true);  // async

xhr.onreadystatechange = function(){
	if(xhr.readyState === 4) {
	 // perform secondly
		alert(xhr.responseText);
	}
};

xhr.send(null);

// perform firsty
alert(xhr.responseText + "this is outside of event handler");