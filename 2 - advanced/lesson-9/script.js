var form = document.getElementById("theForm");

eventUtility.addEvent(form, "submit", function(evt){
	var data = getRequestBody();
		var xhr = new XMLHttpRequest();

	xhr.open("POST", "textfile.txt", true);  // async
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
		// status: 404 not found
		//         500 internal server error
		//         200 success
		var status = xhr.status;

		if((status  >= 200 && status < 300)||(status === 304)){
			alert(xhr.responseText);
		} else {
			alert("Something bad happened!!!");
		}
		}
	};

	xhr.send(data);

	eventUtility.preventDefault(evt); 
});

	var getRequestBody = function(){
	var values = [];

	for(var i = 0, l = form.elements.length; i < l; i++){
	var el = form.elements[i],
		name = encodeURIComponent(el.name),
		value = encodeURIComponent(el.value),
		complete = name + "=" + value;

		values.push(complete);
	}

	return values.join("&");
	};