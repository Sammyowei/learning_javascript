let myShoppingList = [];
myShoppingList.push("Milk", "Bread", "Apple");
console.log(myShoppingList);

myShoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(myShoppingList);


myShoppingList.pop();
console.log(myShoppingList);


myShoppingList.sort();
console.log(myShoppingList);

let index = myShoppingList.indexOf("Milk");
console.log(index);

myShoppingList.splice(1, 0, "Carrot", "Lettuce");
console.log(myShoppingList);


let newList = ["Juice", "Pop"];

// let newListValue = newList.entries();
// let lastIndex = myShoppingList.length - 1;
let myNewList = myShoppingList.concat(newList,newList);

console.log(myNewList);

