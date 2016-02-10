var calculatorBar = function (paramOne, paramTwo, fn) {
	paramOne = paramOne + 3 + 1;
	paramOne = paramOne * 7;

	return fn(paramOne, paramTwo);
}

var foo = calculatorBar(2, 2, function(paramOne, paramTwo) {
	return paramOne + paramTwo;
});

alert(foo);