let heightInInches = prompt("Enter your height inches: ");
let weightInLbs = prompt("Enter your weight in lbs): ");

let inchesToCm = Number(heightInInches) * 2.54;
let lbsToKg = Number(weightInLbs) / 2.2046;

let cmToMeters = inchesToCm / 100;


var bodyMassIndex = lbsToKg / cmToMeters ** 2;

console.log(bodyMassIndex);

alert(`Your BMI: ${bodyMassIndex}`);




