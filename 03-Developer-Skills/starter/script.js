"use strict";

const snail = function (array) {
  //   console.log("----------START------------");
  //   console.table(array);
  let lastRowIdx = array.length - 1;
  let passIterator = 0; //0=top, 1=right, 2=bottom, 3=left

  if (array[0].length == 0) return [];
  if (array[0].length == 1) return array[0];
  const snailArray = [];

  //   console.log("----------START WHILE------------");
  while (array.length > 1 || array[0].length > 1) {
    switch (passIterator) {
      case 0:
        //toprow
        topRow();
        passIterator = 1;
        break;
      case 1:
        //rightcolumn
        rightCol();
        passIterator = 2;
        break;
      case 2:
        //bottomrow
        bottomRow();
        passIterator = 3;
        break;
      case 3:
        //leftcolumn
        leftCol();
        passIterator = 0;
        break;
    }
  }
  //   console.log("----------FINISH------------");
  snailArray.push(array[0][0]);

  //   console.table(array);
  //   console.log(snailArray);
  return snailArray;

  function topRow() {
    //console.log("----------TOP ROW------------");
    //console.table(array);
    for (let i = 0; i < array[0].length; i++) {
      snailArray.push(array[0][i]);
      if (i == array[0].length - 1) {
        //    console.log("beep");
        array.shift();
      }
    }
    //console.table(array);
  }

  function rightCol() {
    //console.log("----------RIGHT COL------------");
    //console.table(array);
    for (let i = 0, j = array[0].length - 1; i < array.length; i++) {
      snailArray.push(array[i].pop());
    }
    //console.table(array);
  }

  function bottomRow() {
    //console.log("----------BOTTOM ROW------------");
    //console.table(array);
    lastRowIdx = array.length - 1;
    for (let i = array[lastRowIdx].length - 1; i >= 0; i--) {
      snailArray.push(array[lastRowIdx][i]);
      if (i == 0) {
        //    console.log("beep beep");
        array.pop();
      }
    }
    //console.table(array);
  }

  function leftCol() {
    //console.log("----------LEFT COL------------");
    //console.table(array);
    for (let i = array.length - 1; i >= 0; i--) {
      snailArray.push(array[i].shift());
    }
    //console.table(array);
  }
};
