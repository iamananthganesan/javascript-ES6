console.log("hey there!!!");

//var a - variable

var chocolates; //Variable declaration

console.log(chocolates); //undefined

var chocolates = "milky bar"; //variable intialization

console.log(chocolates); //milky bar"

var snacks = "chocolates";

for (var i = 0; i <= 5; i++) {
  console.log("iterabel i", i); //1,2,3,4,5
}

console.log("value of i", i); //6 we can make a use of varable declared inside the block scope

for (let j = 0; j <= 5; j++) {
  console.log("iterabel j", j); //1,2,3,4,5
}

console.log("value of j", j); //Referance error since i will be accessable only inside the blocks
