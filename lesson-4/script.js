var foo = calculatorBar(2),
	bar = calculatorBar(3);

function calculatorBar(param) {
	param = param + 3 + 1;
	param = param * 7;

	return param;
}

alert(foo);
alert(bar);