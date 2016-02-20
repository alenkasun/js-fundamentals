localStorage.firstName = "Alyona";
localStorage.setItem("lastName", "Shevchenko");

alert(localStorage.firstName + " " + localStorage.getItem("lastName"));

localStorage.removeItem("lastName");
alert(localStorage.lastName);    // undefined

localStorage.clear();


// Important: in localStorage all data are string
localStorage.age = 47;
alert(typeof localStorage.age);   // string
var age = parseInt(localStorage.age, 10);