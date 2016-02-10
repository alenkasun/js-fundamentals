var globalVar = 'This is global variable';

var globalFunction = function(){
	alert(globalVar);
	globalVar = 'Value has beev modified';
}

globalFunction();
alert(globalVar);