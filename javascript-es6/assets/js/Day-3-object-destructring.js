//Complete Object
const person = {
  firstname: "Senthil",
  lastname: "Anand",
  age: 34,
  isAlive: true,
  favColor: "red",
  getDetails: function () {
    return `${this.firstname} ${this.lastname} is ${this.age} years old!!!`;
  },
};

console.log(person);
//Traditional way
console.log(person.getDetails());

//Destructuring

const { isAlive, getDetails } = person;

//❌ getDetails() loses its this context when destructured.

//✅ Use .bind(person) or access it via person.getDetails() to preserve context.

//console.log("details", firstname, getDetails());

console.log("Get details", getDetails.bind(person)());

//Destructuring without defining
let favnum1, favnum2;

({ favNum1, favNum2 } = {
  favNum1: 1,
  favNum2: 2,
  favNum3: 3,
});

console.log(favNum1, favNum2);

//using rest operator

let favnum3, favnum4;

({ favNum3, favNum4, ...otherValues } = {
  favNum1: 1,
  favNum2: 2,
  favNum3: 3,
  favNum4: 4,
  favNum5: 5,
  favNum6: 6,
});

console.log(favnum3, favnum4, otherValues);

const { firstname, lastname, ...otherparams } = person;

//Destructing in function params

function displayUser({ firstname, lastname, age, favColor: favoriteColor }) {
  console.log(`${firstname} ${lastname} ${age} ${favoriteColor}`);
}

displayUser(person);
