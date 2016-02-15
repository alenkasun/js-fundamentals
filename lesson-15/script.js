(function(){

var speed = 2000,
	doSomething = function(){
	console.log("doSomething() executed !!!");
	setTimeout(doSomething, speed);
};

setTimeout(doSomething, speed);

alert("There is no delay: setTimeout executes async")

}());