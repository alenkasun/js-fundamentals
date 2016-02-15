(function(){

var doSumthing = function(){
	console.log("doSomething() executed !!!");
};

setTimeout(doSumthing, 2000);

alert("There is no delay: setTimeout exectes async")

}());