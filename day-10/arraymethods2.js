const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
// Add your code here
myArray.pop();
myArray.push("Dami", "Emma");

for(let i = 0; i<= myArray.length; i++){
    console.log(i + myArray[i]);
}
// OR

myArray.forEach((name, index) => {
  const newElement = `${name} (${index})`; // -> This line says okay make a new string that has holds the name and index of every element in the array
  myArray[index] = newElement; // -> Now replace these existing array elements with the newly created strings
});

// Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = myString;
// section.appendChild(para1);
