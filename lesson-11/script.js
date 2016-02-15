(function(){

var href = location.href;
alert(href);

if(confirm("Do you want to go to Google.com?")){
	alert("We'll take you there.");
} else {
	alert("You'll stay here.");
}

}());