(function(){

var speed = 2000,
	doSumthing = function(){
	console.log("doSomething() executed !!!");
	setTimeout(doSomething, speed);
};

setTimeout(doSumthing, speed);

alert("There is no delay: setTimeout executes async")

}());