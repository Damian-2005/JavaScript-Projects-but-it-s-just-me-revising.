### Functions Cont'd 

Functions can access outer variable and modify them.

```
let name = "Damilola"
// So now a function that adds the last name "Adebayo" to the name variable

function addLastName (){
	name = name + "Adebayo";
	console.log (name); 
}
```

Output: "DamilolaAdebayo"

The point? The function "addLastName" have now permanently modified the variable "name".

Learnt about parameters -> Placeholders for data in a function declaration
Learnt what arguements are -> The actual data used when the function is called.

Learnt about the return keyword 

---

## Arrow Functions, the basics.

Syntax: let func = (arg1, arg2, arg3, ...) => expression.

Rewriting the add last name function as an arrow function.

```
let addLastName = () => name = name + "Adebayo";
addName();
```

Simple.


## Function expressions revisting

A syntax that allows us to create functions in the middle of any expression.

```
let sayHi = function(){
	alert("Hello");
};
```

**No matter how a function is created, it remains a value**


### Callback Functions

Functions that are executed based on a particular users input / response to a function.

A major function takes in some functions as arguements and only run them (call them) when needed.

**NB: Function expressions are created only when execution reaches them.**


Makes sense now, these functions.

