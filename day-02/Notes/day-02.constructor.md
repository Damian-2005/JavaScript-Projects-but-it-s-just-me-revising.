---
title: constructor
desc: understanding what constructors are
---
###  What are they? 

Constructors are functions that let us build objects that automatically has starting values. **"Initial State"**

They mean what they exactly mean. 

### An example that just makes sense?

So I want to create an person, easily. So I make this function:

```
function Person(name, age){
	this.name = name;
	this.age = age;
}
```

^ now that's a basic constructor function that creates a person with the provided name and age parameters 


### Creating Me (Damian)

```
const Damian = new Person("Damian", 21);
```

So what happens, when I type this out on my terminal?

- A brand new empty object is created.
- That new object gets linked to Person.prototype
- The function runs with this pointing to the newly created object. So it makes the object take the parameters we give to it. The name becomes the object name and so does the age.
- Then the new object is returned automatically.

Wow never knew, I'd ever need a function revision.

[[day-02.functions]]
