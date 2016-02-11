var obj = "This is a string object.",
	length = obj.length,
	pos1 = obj.indexOf("This"),
	pos2 = obj.indexOf("is"),             // 2
	pos3 = obj.indexOf("is", pos2 + 1);   // 5 

console.log(pos3);