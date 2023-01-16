/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
 1. Store Mark's and John's mass and height in variables 
 2. Calculate both their BMIs using the formula (you can even implement both versions)
 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall. 
*/

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = BMI = markWeight1 / markHeight1 ** 2;
const johnBMI1 = BMI = johnWeight1 / johnHeight1 ** 2;
const markBMI2 = BMI = markWeight2 / markHeight2 ** 2;
const johnBMI2 = BMI = johnWeight2 / johnHeight2 ** 2;

console.log("Mark BMI1 = ", markBMI1);
console.log("John BMI1 = ", johnBMI1);
console.log("Mark BMI2 = ", markBMI2);
console.log("John BMI2 = ", johnBMI2);

const isMarkHigher1 = markBMI1 > johnBMI1;
const isMarkHigher2 = markBMI2 > johnBMI2;

console.log("Data1 - is Mark's BMI higher than John's? : ", isMarkHigher1);
console.log("Data2 - is Mark's BMI higher than John's? : ", isMarkHigher2);