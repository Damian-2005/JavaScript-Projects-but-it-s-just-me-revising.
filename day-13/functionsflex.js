/* My logic for problem number 1:

-> Convert the number string,
-> Use a loop to display all the letters/numbers in reverse order 
-> Store in a variable 
-> Display the reversed string

*/

function revNumber(number){
    // convert input number to string
    number = number + "";

    //split string into array, rev the array and then join 
    return Number(number.split("").reverse().join(""));
}

console.log(revNumber(2323232));

// 2

function revNegative(number){
    number = number + "";
    let numArray = number.split("");
    numArray.splice(0,1);
    let newNumber = numArray.reverse().join("");
    return Number("-" + newNumber);
}

console.log(revNegative(-76));

// 3

function checkPalindrome (palindrome) {
    // Change the input to lowercase and replace the alphanumeric with ''
    let pstore = palindrome.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    let count = 0;
    // above is a regex that says no alphabets(high/lowercase and number)

    //check if the string is empty
    if(pstore === ""){
        console.log("nothing? really?");
        return false;
    }
    if((pstore.length)%2 === 0){
        count = (pstore.length) / 2;
    }
    else{
        if(pstore.length === 1){
            console.log("Entry is a single letter string, therefore it's a palindrome")
            return true;
        }
        else{
            count = (pstore.length - 1) /2;
        }
    }
    for(let i = 0; i < count; i++){
        if (pstore[i] != pstore.slice(-1-i)[0]){
            console.log("non-palindrome alert!");
            return false;
        }
    }
    console.log("Palindrome Alert");
    return true;
}

checkPalindrome("madam");

//OR simply:

function palindromer(randString){
    let len = randString.length;

    // looping through the first half of the string 
    for(let i = 0; i > len/2; i++){
        if(str[i] !== str[len - 1 -i]){
            return false;
        }
    }
    return true;
}

console.log(palindromer("madam"));

