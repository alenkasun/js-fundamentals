var foo = "hello, window";

var bar = function() {
	var foo = "hello, function";

	alert(window.foo);
};

bar();