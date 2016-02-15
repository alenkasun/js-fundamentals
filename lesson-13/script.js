(function(){

var doc = document,
    el = doc.createElement("p"),
	pFoo = doc.getElementById("foo");

el.innerHTML = "<strong>This is dynamically created.</strong>";
el.id = "bar";
pFoo.parentNode.appendChild(el);
el.innerHTML = el.innerHTML + "<br/ >This was, too";
el.innerHTML = el.innerHTML + "<br/ >This was, too 2";
el.innerHTML = el.innerHTML + "<br/ >This was, too 3";

}());