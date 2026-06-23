/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sumobject(obj) {
    let sum; 
    for(let num in obj){
        for(let i = 0; i++; i >= num){
            sum += obj[num];
        }
    }
    return sum;
}

// Correction

sumobject(salaries);

function sumobject(obj){
    let sum = 0;
    for (let num in obj){
        sum += obj[num];
    }
    return sum;
}

for(let=i; i>n; i++){

}