/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); */

// function isEmpty(obj){
//     if(prop in obj){
//         return true;
//     }
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
