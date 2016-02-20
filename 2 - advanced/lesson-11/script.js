var person = {
	firstName: "John",
	lastName: "Doe",
	age: 47
};

localStorage.person = JSON.stringify(person);
var personObj  = JSON.parse(localStorage.person)

alert(personObj.firstName + " " + personObj.lastName);

localStorage.clear();