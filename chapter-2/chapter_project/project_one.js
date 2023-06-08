
/*
Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the 
value in kilometers in the following format:
*/

let kilometers = prompt("please enter the distance in kilometers: ");
kilometers = Number(kilometers);

let miles = 0.621 * kilometers;

console.log(`the distance of ${kilometers} Km is equal to ${miles} miles`);