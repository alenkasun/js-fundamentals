localStorage.firstName = "Alyona";
localStorage.setItem("lastName", "Shevchenko");

alert(localStorage.firstName + " " + localStorage.getItem("lastName"));

localStorage.removeItem("lastName");
alert(localStorage.lastName);    // undefined