/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = BMI = markWeight / markHeight ** 2;
const johnBMI = BMI = johnWeight / johnHeight ** 2;
// console.log("Mark BMI = ", markBMI);
// console.log("John BMI = ", johnBMI);

const isMarkHigher = markBMI > johnBMI;
// console.log("Data - is Mark's BMI higher than John's? : ", isMarkHigher);


if (isMarkHigher) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}