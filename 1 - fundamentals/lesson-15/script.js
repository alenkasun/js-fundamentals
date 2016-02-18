(function(){

var speed = 10,
	moveBox = function(moveBy){
		var el = document.getElementById("box"),
			left = el.offsetLeft,
			moveBy = 3;

		el.style.left = left + moveBy + "px";			

		if ((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51)) {
			clearInterval(timer);
			timer = setInterval(function(){
				moveBy(moveBy * -1);
			}, speed);
		}	
};

var timer = setInterval(function () {
		moveBox(3);
    }, speed);

}());