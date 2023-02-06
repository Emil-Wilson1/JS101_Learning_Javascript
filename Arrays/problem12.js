
// convert the small case character into capital case character.


// // p ----> P
// y ----> Y

// h---> H

let character = "b"// A

//1. array --> small case character.

//2. array--> capital case character.

let lower_case= ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p"];

let capital_case = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];


for(let i=0; i<lower_case.length;i++){

  if(character== lower_case[i]){
    character= capital_case[i];
  }
}

console.log(character);
