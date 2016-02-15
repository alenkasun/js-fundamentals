(function(){

var foo = "hello, window";

var bar = function() {
	var foo = "Hello, function";

	alert(window.foo);  // undefined !!!
};

bar();

}());