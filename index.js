const fibs = (num) => {
  let firstNum = 0;
  let secondNum = 1;

  for (let i = 0; i < num - 1; i++) {
    const storedNum = secondNum;
    secondNum = firstNum + secondNum;
    firstNum = storedNum;
  }
  return secondNum;
};

console.log(fibs(44));

const recursiveFibs = (iteration, curNum = 0, nextNum = 1) => {
  if (iteration === 0) {
    return curNum;
  } else {
    return recursiveFibs(iteration - 1, nextNum, curNum + nextNum);
  }
};

console.log(recursiveFibs(44));

const mergeSort = (array) => {
  const midLength = Math.floor(array.length / 2);

  const tempLeft = array.slice(0, midLength);
  const tempRight = array.slice(midLength);

  let leftArray;
  let rightArray;

  if (midLength === 0) {
    leftArray = tempLeft;
    rightArray = tempRight;
  } else {
    leftArray = mergeSort(tempLeft);
    rightArray = mergeSort(tempRight);
  }

  const returnArray = [];
  while (leftArray.length > 0 || rightArray.length > 0) {
    let pushedValue;
    if (leftArray[0] && rightArray[0]) {
      pushedValue =
        leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift();
    } else if (leftArray[0]) {
      pushedValue = leftArray.shift();
    } else {
      pushedValue = rightArray.shift();
    }

    returnArray.push(pushedValue);
  }

  return returnArray;
};

console.log(mergeSort([8, 4, 2, 4, 1, 100, 74, -12, 9, 4]));
