(function(){

var el = document.createElement("p"),
	content = document.createTextNode("<strong>This was dynamically created</strong>");

el.appendChild(content);
el.setAttribute("align", "center");
el.id = "bar";

document.body.appendChild(el);


}());