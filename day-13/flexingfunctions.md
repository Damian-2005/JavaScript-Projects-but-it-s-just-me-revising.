---
title: Flex my function knowledge.
desc: Noticed I've got a shaky functions foundation, so I'll be tackling these problems to solidify knowledge
src: https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
---

1. Reverse Number ✅

Write a JavaScript function that reverses a number.

Example x = 32243;

_Expected Output :_ 34223

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php)

Solution:

```
function revNumber(number){
	//convert input number to string
	number = String(number);
	number = number + ""; -> 
	
	//convert to array, split, reverse and join back
	return Number(number.split("").reverse().join(""));
}
console.log(revNumber([number input]))
```


2. Reverse Negative number digits while preserving the negative sign. ✅

```
function revNegative(number){

    number = number + "";

    let numArray = number.split("");

    numArray.splice(0,1);

    let newNumber = numArray.reverse().join("");

    return Number("-" + newNumber);

}

console.log(revNegative(-76));
```

  
3. Check Palindrome. ✅

Write a JavaScript function that checks whether a passed string is a palindrome or not?

A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-2.php)

```
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
```
  
3. String Combinations

Write a JavaScript function that generates all combinations of a string.

_Example string :_ 'dog'

_Expected Output :_ d,do,dog,o,og,g

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php)

  
4. Sort String Alphabetically ✅

Write a JavaScript function that returns a string that has letters in alphabetical order.

_Example string :_ 'webmaster'

_Expected Output :_ 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-4.php)

```
My logic of:
Function takes string,
string -> array through the split method
loop through each letter of array and compare each individual element
something like if index[1] > index[i + 1] 
index[i] = index[i + 1]; -> The replacement part
outside loop return array.join(""); -> return the string

Flawed Logic btw, ever heard of bubble sort algo? or even lazier, array methods?
```  
5. Capitalize First Letter of Each Word ✅

Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

_Example string_ : 'the quick brown fox'

_Expected Output :_ 'The Quick Brown Fox '

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php)

```
Logic: 
split sentence the sentence into an array
access the individual elements of the array and change their [0] to uppercase
return a join version

banger oooooo 
```

  
6. Find Longest Word

Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

_Example string_ : 'Web Development Tutorial'

_Expected Output :_ 'Development'

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-6.php)

  
7. Count Vowels

Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

_Example string_ : 'The quick brown fox'

_Expected Output :_ 5

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php)

  
8. Check Prime Using Recursion

Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php)

  
9. Get Type of Argument

Write a JavaScript function that accepts an argument and returns the type.

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-9.php)

  
10. Generate Identity Matrix

Write a JavaScript function which returns the n rows by n columns identity matrix.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-10.php)

  
11. Find Second Lowest and Greatest

Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

_Sample array :_ [1,2,3,4,5]

_Expected Output :_ 2,4

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-11.php).

  
12. Check Perfect Number

Write a JavaScript function that checks whether a number is perfect.

According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

_Example_ : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-12.php).

  
13. Compute Factors

Write a JavaScript function to compute the factors of a positive integer.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-13.php).

  
14. Convert Amount to Coins

Write a JavaScript function to convert an amount into coins.

_Sample function_ : amountTocoins(46, [25, 10, 5, 2, 1])

Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.

_Output_ : 25, 10, 10, 1

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-14.php).

  
15. Compute Power (bn)

Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-15.php).

  
16. Extract Unique Characters

Write a JavaScript function to extract unique characters from a string.

_Example string_ : "thequickbrownfoxjumpsoverthelazydog"

_Expected Output_ : "thequickbrownfxjmpsvlazydg"

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-16.php).

  
17. Count Letter Occurrences

Write a JavaScript function to get the number of occurrences of each letter in a specified string.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-17.php).

  
18. Binary Search in Array

Write a function for searching JavaScript arrays with binary searches.

_Note_ : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-18.php).

  
19. Find Elements Larger Than Number

Write a JavaScript function that returns array elements larger than a number.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-19.php).

  
20. Generate Random String ID

Write a JavaScript function that generates a string ID (specified length) of random characters.

_Sample character list_ : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php).

  
21. Fixed-Length Subsets

Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.

_Sample array_ : [1, 2, 3] and subset length is 2

_Expected output_ : [[1,2],[1,3],[2,3]]

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-21.php).

  
22. Count Letter in String

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

_Sample arguments_ : 'w3resource.com', 'o'

_Expected output_ : 2

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php)

  
23. Find First Non-Repeated Character

Write a JavaScript function to find the first not repeated character.

_Sample arguments_ : 'abacddbec'

_Expected output_ : 'e'

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-23.php)

  
24. Bubble Sort Algorithm

Write a JavaScript function to apply the Bubble Sort algorithm.

_Note_ : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

_Sample array_ : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

_Expected output_ : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php)

  
25. Find Longest Country Name

Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

_S__ample function_ : Longest_Country_Name(["Australia", "Germany", "United States of America"])

_Expected output_ : "United States of America"

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-25.php)

  
26. Longest Substring Without Repeating Characters

Write a JavaScript function to find the longest substring in a given string without repeating characters.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-26.php)

  
27. Longest Palindromic Substring

Write a JavaScript function that returns the longest palindrome in a given string.

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-27.php)

  
28. Pass Function as Parameter

Write a JavaScript program to pass a 'JavaScript function' as a parameter.

[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-28.php)

  
29. Get Function Name

Write a JavaScript function to get the function name.