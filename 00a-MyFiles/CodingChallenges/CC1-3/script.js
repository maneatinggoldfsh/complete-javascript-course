/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!


Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy


Test data:
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsScore1 = 95;
const dolphinsScore2 = 95;
const dolphinsScore3 = 98;
const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(`Dolphin's Score: ${dolphinsScore1} + ${dolphinsScore2} + ${dolphinsScore3} / 3 = ${dolphinsAverageScore}`);

const koalasScore1 = 95;
const koalasScore2 = 95;
const koalasScore3 = 99;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`Koala's Score: ${koalasScore1} + ${koalasScore2} + ${koalasScore3} / 3 = ${koalasAverageScore}`);

if (dolphinsAverageScore > koalasAverageScore) {
    console.log("Dolphins Win!");
} else if (koalasAverageScore > dolphinsAverageScore) {
    console.log("Koalas Win!");
} else {
    console.log("It's a tie!")
}

console.log(`
Bonus 1
`)

if (dolphinsAverageScore > koalasAverageScore && (dolphinsScore1 >= 100 || dolphinsScore2 >= 100 || dolphinsScore3 >= 100)) {
    console.log("Dolphins Win!");
} else if (koalasAverageScore > dolphinsAverageScore && (koalasScore1 >= 100 || koalasScore2 >= 100 || koalasScore3 >= 100)) {
    console.log("Koalas Win!");
} else {
    console.log("It's a tie!")
}

console.log(`
Bonus 2
`)

if (dolphinsAverageScore > koalasAverageScore && (dolphinsScore1 >= 100 || dolphinsScore2 >= 100 || dolphinsScore3 >= 100)) {
    console.log("Dolphins Win!");
} else if (koalasAverageScore > dolphinsAverageScore && (koalasScore1 >= 100 || koalasScore2 >= 100 || koalasScore3 >= 100)) {
    console.log("Koalas Win!");
} else if (koalasAverageScore === dolphinsAverageScore && (koalasScore1 < 100 || koalasScore2 < 100 || koalasScore3 < 100) && (dolphinsScore1 < 100 || dolphinsScore2 < 100 || dolphinsScore3 < 100)) {
    console.log("It's a tie!");
} else {
    console.log("Nobody wins!")
}