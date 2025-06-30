//Creating an object

//Creating object with new keyword
const personwithObjectContructor = new Object();

//Traditional way to create an object
const person = {
  firstname: "Senthil",
  lastname: "Anand",
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

//calling an object
console.log(person.getFullName());

const personMethod = {
  yearofbirth: () => {},
  favcolor: "red",
};
//merging an object

Object.assign(person, personMethod);

console.log(person);

person.firstname = "Mani";
person.lastname = "kandan";

//Object cloning

const copiedPersonObj = Object.assign({}, person);

console.log("Original object", person, "Copied object", copiedPersonObj);


//A shallow copy copies only the top-level properties of an object or array. If those properties are references (like nested objects/arrays), they are not cloned — just referenced.

const original = {
  name: "Anand",
  address: {
    city: "Chennai"
  }
};
//Spread operator also do the shallow copy 
const shallowCopy = { ...original };

// Modify nested object in the copy
shallowCopy.address.city = "Bangalore";

console.log(original.address.city); // 👉 "Bangalore" (unexpected change!)


//A deep copy clones all levels of the object or array — including any nested objects/arrays. This way, the original and the copy are completely independent.

const originalNew = {
  name: "Anand",
  address: {
    city: "Chennai"
  }
};

const deepCopy = structuredClone(originalNew); // browser-supported (modern)

deepCopy.address.city = "Bangalore";

console.log(original.address.city); // 👉 "Chennai" (unchanged)


//Alternate Deep copy methods
const deepCopy = JSON.parse(JSON.stringify(original));

//else we can make a use of libraries
import cloneDeep from 'lodash/cloneDeep';

const deepCopy = cloneDeep(original);