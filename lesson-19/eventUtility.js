var addEvent = function(el, type, fn) {
	if(typeof addEventListener !== 'undefined') {
		el.addEventListener(type, fn, false);
	} else if (typeof attachEvent !== 'undefined') {
		el.attachEvent("on" + type, fn);
	} else {
		el["on" + type] = fn;
	}

};