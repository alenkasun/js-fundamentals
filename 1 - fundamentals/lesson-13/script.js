(function(){

var doc = document,
    el = doc.createElement("p"),
	pFoo = doc.getElementById("foo");

el.innerHTML = "<strong>This is dynamically created.</strong>";
el.id = "bar";
pFoo.parentNode.appendChild(el);

var html = el.innerHTML;

html = html + "<br/ >This was, too";
html = html + "<br/ >This was, too 2";
html = html + "<br/ >This was, too 3";

el.innerHTML = html;

}());