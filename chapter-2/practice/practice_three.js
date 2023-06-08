
/*
Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a2
 + b2
 = c2.
*/


let a = prompt("Enter the value of the adjacent: ");

let b = prompt("Enter the value of the opposite");

a = Number(a);

b = Number(b);

c = ((a ** 2) + (b ** 2)) ** (1 / 2)

console.log(`the value of the Hypotenus is: ${c}`);
