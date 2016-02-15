(function(){

var doc = document,
    el = doc.createElement("p"),
	content = doc.createTextNode("<strong>This was dynamically created</strong>");
	pFoo = doc.getElementById("foo");

el.appendChild(content);
el.setAttribute("align", "center");
el.id = "bar";

pFoo.parentNode.insertBefore(el, pFoo);
//pBar.parentNode.replaceChild(el, pBar);

}());