//Map Object is similar like object but it helps to get the unique keys in object
const foods = [
  { id: 1, title: "Burger", diertry: "non-veg" },
  { id: 2, title: "Fries", diertry: "veg" },
  { id: 3, title: "fried chicken", diertry: "non-veg" },
];

const maggieIngridents = new Map();

maggieIngridents.set("water", "1glass of water");
maggieIngridents.set("masala", 1);
maggieIngridents.set("salt", "1 spoon");

maggieIngridents.set({}, "empty obj");

maggieIngridents.set(function () {}, "empty function");

//Accessing Map data

console.log(maggieIngridents.get("salt"));
