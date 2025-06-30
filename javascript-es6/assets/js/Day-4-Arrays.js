//Declaring an array []

//Constructor Array
const frontendtechnologies = new Array(
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node"
);

//Recommaded way
const favTechs = ["HTML", "CSS", "Javascript", "React", "Node"];

//Get the length of an array
console.log(favTechs.length);

//Accessing the last element of an array
console.log(favTechs[favTechs.length - 1]);

const foods = [
  { id: 1, title: "Burger", diertry: "non-veg" },
  { id: 2, title: "Fries", diertry: "veg" },
  { id: 3, title: "fried chicken", diertry: "non-veg" },
];

console.log("foods", foods);

//Array loops

//for loop
for (let i = 0; i < foods.length; i++) {
  console.log("For loop", foods[i].title);
}

//for in loop
for (let item in foods) {
  console.log("For in loop", item);
}

//for of loop
for (let item of foods) {
  console.log("For in loop", item); // Gives you the complete object in eacj iteration
}

const olData = document.getElementById("results");
//forEach
foods.forEach((food) => {
  olData.innerHTML += `<li>${food.title}</li>`;
});

//Multi dimentional Array
const matrix = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33],
];

console.log(matrix.flat());

//Depth

const matrixWithDepth = [
  [11, 12, 13],
  [21, 22,[222,223], 23],
  [31, 32, 33],
];

console.log(matrix.flat(1));

//Where 1 is depth