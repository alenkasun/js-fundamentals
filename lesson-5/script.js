var globalVar = 'This is global variable';

var globalFunction = function(){
	var localVar = 'This is local variable';

	alert(localVar);
	globalVar = 'Global value has beev modified';
}

globalFunction();
alert(globalVar);