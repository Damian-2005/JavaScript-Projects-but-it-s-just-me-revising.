let name = "Damilola"
// So now a function that adds the last name "Adebayo" to the name variable

function addLastName (){
	name = name + "Adebayo";
	console.log (name); 
}

function checkAge(age){
    return (age > 18) || confirm ("Did your parents allow you?");
}

let addName = () => name = name + "Adebayo";
addName();