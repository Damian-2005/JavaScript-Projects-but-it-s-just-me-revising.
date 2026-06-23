---
desc: So he continues JavaScript Objects, something he's been putting off for a while.
---
I barely wrote an object code, so this is me just recalling the object constructor syntax.

```
let Damilola = new object() {
};
```

Utter nonsense, what I just wrote.

**Correction:**
```
let Damilola = new Object(); -> Object constructor syntax.
```

```
let Damilola = {
	favFood: "Fried Rice",
	age: "21",
}

// Object literal syntax.
```

We can add extra properties to Damilola, using the dot method.
```
Damilola.relStatus = "Single";
```

The code above adds in Damilola's relationship status to his already existing object.

###### delete operator

Used to remove properties from an already existing object.

```
delete Damilola.favFood;
```

Permanently removes Damilola's Favorite food entry.

###### Square Brackets Method

```
Damilola."likes comicbooks" = true
```

Tried this and it didn't work earlier today. And here's where the Square Brackets come in.

```
Damilola.["likes comicbooks"] = true;
```

#### How to use Squares?

object name[property] = value;


#### Tackling Problems

```
// function isEmpty(obj){

//     if(prop in obj){

//         return true;

//     }

// }

  

// let Damilola = new Object();

  

// isEmpty(Damilola);

  
  

//Correction

  

function isEmpty (obj){

    for(let prop in obj){

        return false; // found a property

    }

    return true; // found no property

}
```


you even define your "imaginary" variable before you use it, hence the reason for the "let"

I think I get it now.

