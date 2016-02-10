var globalVar = 'This is global variable';

var globalFunction = function(arg){
	var localVar = 'This is local variable.';
	var localFunction = function(){
		var superLocalVar = 'Hello, world!';
		alert(superLocalVar);
		alert(localVar);
		alert(arg);		
		alert(globalVar);
	}

	localFunction();
}

globalFunction('check scope');