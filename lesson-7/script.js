var person = {
	firstName  : "Alyona",
	lastName   :"Shevchenko",
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	}	
};

alert(person.getFullName());