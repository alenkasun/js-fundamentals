var person = new Object();

person.firstName = "Alyona";
person.lastName = "Shevchenko";
person.getFullName = function(){
	return this.firstName + " " + this.lastName;
}

alert(person.getFullName());