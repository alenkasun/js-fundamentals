var addEvent = function(el, type, fn) {
	if(typeof addEventListener !== 'undefined') {
		el.addEventListener(type, fn, false);
	} else if (typeof attachEvent !== 'undefined') {
		el.attachEvent("on" + type, fn);
	} else {
		el["on" + type] = fn;
	}

};

var removeEvent = function(el, type, fn) {
	if(typeof removeEventListener !== 'undefined') {
		el.removeEventListener(type, fn, false);
	} else if (typeof detachEvent !== 'undefined') {
		el.detachEvent("on" + type, fn);
	} else {
		el["on" + type] = null;
	}

};

var getTarget = function(event) {
	if (typeof event.target !== "undefined"){
		return event.target;
	} else {
		return event.srcElement;
	}
};

var preventDefault = function(event) {
	if (typeof event.preventDefault !== "undefined") {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
};