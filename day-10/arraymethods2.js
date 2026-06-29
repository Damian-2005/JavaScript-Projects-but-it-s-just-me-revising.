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
    console.log(i + myArray.indexOf(i));
}
// Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = myString;
// section.appendChild(para1);
