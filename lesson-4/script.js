var calculatorBar = function (paramOne) {
	paramOne = paramOne + 3 + 1;
	paramOne = paramOne * 7;

	return paramOne;
}

var foo = calculatorBar(2),
	bar = calculatorBar(3);

alert(foo);
alert(bar);