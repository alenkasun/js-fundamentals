var xhr = new XMLHttpRequest();

xhr.open("GET", "rss.json.txt", true);  // async

xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
		var status = xhr.status;

		if((status  >= 200 && status < 300)||(status === 304)){
			var rss = JSON.parse(xhr.responseText);
			alert(rss.channel.title);
			alert(rss.channel.items[0].description);
		} else {
			alert("Something bad happened!!!");
		}
	}
};

xhr.send(null);