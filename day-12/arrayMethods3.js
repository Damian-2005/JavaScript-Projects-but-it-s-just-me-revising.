const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
birds.indexOf("Eagles");
birds.splice(2,1); // Eagles have now being removed 🤖

//using for loop 

// for(i = 0; i< birds.length; i++){
//     if(birds[i].startsWith('E')){
//         eBirds.push([birds[i]]);
//     }
// }
// console.log(eBirds);

// Don't edit the code below here!
function startWtithE(bird){
    return bird.startWith('E');
}
const eBirds = birds.filter(startWtithE);

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);