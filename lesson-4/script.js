var calculatorBar = function (paramOne, paramTwo, fn) {
	paramOne = paramOne + 3 + 1;
	paramOne = paramOne * 7;

	return fn(paramOne, paramTwo);
}

function sum(paramOne, paramTwo) {
	return paramOne + paramTwo;
}

var foo = calculatorBar(2, 2, sum),
	bar = calculatorBar(3, 3, sum);

alert(foo);
alert(bar);