// Arrays

//  creating an array 

let arr1 = new Array("purple", "blue", "yellow", "green");

let arr2 = ["black", "green", "orange ", "pink"];

console.log(arr1);
console.log(arr2);

let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);

// Built-in length property

let color = ["black", "orange", "pink"];
let boolean = [true, false, false, true];

let emptyArray = [];

console.log("Length of colors:", color.length);
console.log("Lenght of booleans:", boolean.length);
console.log("Length of empty array:", emptyArray.length);

let lastElement = color[color.length - 1];
console.log(lastElement);

let numbers = [12, 24, 54];

numbers[5] = 48;

console.log(numbers.length)
console.log(numbers);


//! Adding and replacing elements.

let favoriteFruits = ["Grapefruitss", "Orange", "Lemon"];
favoriteFruits.push("Tangeringe");
favoriteFruits.push("Lime");

console.log(favoriteFruits);


let arrOfShapes = ["Circle", "Triangle", "Rectangle", "Pentagon"];
arrOfShapes.splice(2, 0, "Square", "Trapezoid");
console.log(arrOfShapes);


let findValue = arrOfShapes.find(function (value) {
    return value === "Circle";
});

let findValue1 = arrOfShapes.find(value => value === "Cube");

console.log(findValue, findValue1);


let findIndex = arrOfShapes.indexOf("Rectangle");

let findIndex1 = arrOfShapes.indexOf("Triangle");

let findInde2 = arrOfShapes.indexOf("Square", "Pentagon");

console.log(findIndex, findIndex1, findInde2);



// Sorting an Array
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

names.sort();

console.log(names);

let ages = [18, 24, 35, 36, 47, 37,];
ages.sort();

console.log(ages);


// Reversing an Array.

names.reverse();
console.log(names);


// ! Multi-Dimentional Arrays

let arrOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let value1 = arrOfArrays[0][1];
let value2 = arrOfArrays[2][2];
console.log(value1);
console.log(value2);


arrOfArraysOfArray = [arrOfArrays, arrOfArrays, arrOfArrays];

console.log(arrOfArraysOfArray)

let middleArray = arrOfArraysOfArray[1][1][1];
console.log(middleArray);


