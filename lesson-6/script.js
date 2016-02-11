var obj = "This is a string object.",
	length = obj.length,
	pos1 = obj.indexOf("This"),
	pos2 = obj.indexOf("is"),             // 2
	pos3 = obj.indexOf("is", pos2 + 1);   // 5 
	pos4 = obj.indexOf("this"),           // -1
	pos5 = obj.lastIndexOf("is"),         // 5
	pos6 = obj.lastIndexOf("is", pos5 - 1);

console.log(pos6);