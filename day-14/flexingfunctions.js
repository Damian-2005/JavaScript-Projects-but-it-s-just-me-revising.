/* Problem 4:

4. Sort String Alphabetically

Write a JavaScript function that returns a string that has letters in alphabetical order.

_Example string :_ 'webmaster'

_Expected Output :_ 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.

*/

function sortAlpha(string){
    let stringArray = string.split("");
    // looping through each entry in the array 
    for(let i = 0; i < stringArray.length - 1; i++){
        if(stringArray[i] > stringArray[i + 1]){
            let temp = stringArray[i];
            stringArray[i] = stringArray[i + 1];
            string[i + 1] = temp;
        }
        else{
            let temp = string[i + 1]; 
            stringArray[i + 1] = stringArray[i]
            string[i] = temp;
        }
    }
    return stringArray.join(""); 
}

sortAlpha("webmaster");


/// flawed logic - one character comparison doesn't get the job done bro 

// Correction

function sortAlpha(string){
    let stringArray = string.split("");

    for(let i = 0; i < stringArray.length; i++){
        //the inner comparision loop
        for(let j = 0; j < stringArray.length - 1; j++){
            if (stringArray[j] > stringArray[j + 1] ){
                let temp = stringArray[j];
                stringArray[j] = stringArray[j + 1];
                stringArray[j + 1] = temp;
            }
        }
    }
    return stringArray.join("");
}

console.log(sortAlpha('webmaster'));


// or you could do it the easy way, with array methods 🤦🏻‍♀️

function sortAlpha(string){
    let stringArray = string.split('');
    return stringArray.sort().join("");
}


// Capitalize First Letter of Each Word

function capitalise(sentence){
    let sentenceArray = sentence.split(' ');
    for(let i = 0; i < sentenceArray.length; i++){
        sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].substring(1);
    }
    return sentenceArray.join(" ");
}
console.log(capitalise("hello world i am dami"));