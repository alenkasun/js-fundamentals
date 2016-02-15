(function(){

var speed = 500,
	i = 0,
	doSomething = function(){
	console.log("doSomething() executed " + (i + 1) + " times !!!");
	i = i + 1;
	if (i < 10) {
		setTimeout(doSomething, speed);
	}
};

setTimeout(doSomething, speed);

alert("There is no delay: setTimeout executes async")

}());