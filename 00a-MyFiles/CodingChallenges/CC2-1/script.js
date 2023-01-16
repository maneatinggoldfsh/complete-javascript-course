/*
    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// const d1 = 44;
// const d2 = 23;
// const d3 = 71;
// const k1 = 65;
// const k2 = 54;
// const k3 = 59;

const d1 = 85;
const d2 = 54;
const d3 = 41;
const k1 = 23;
const k2 = 34;
const k3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const dAvg = calcAverage(d1, d2, d3);
const kAvg = calcAverage(k1, k2, k3);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins the trophoy (Dolphins: ${avgDolphins} vs. Koalas: ${avgKoalas})`)
    }
}

checkWinner(dAvg, kAvg);