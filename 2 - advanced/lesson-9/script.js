var xhr = new XMLHttpRequest();

xhr.open("GET", "textfile.txt", true);  // async

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

xhr.send(null);