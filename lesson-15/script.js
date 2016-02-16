(function(){

var speed = 10,
	moveBox = function(){
		var el = document.getElementById("box"),
			left = el.offsetLeft,
			moveBy = 3;

		el.style.left = left + moveBy + "px";			

		if (left > 399) {
			clearInterval(timer);
		}	
};

var timer = setInterval(moveBox, speed);

}());