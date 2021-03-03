// 1. Alternating Characters- You are given a string with characters 'A' and 'B' only. Your task is to change it into a string such that there 
// are no matching adjacent characters. Do this by deleting zero or more characters in the string, and return the minimum number of deletions.

function alternatingCharacters(s) {
let originalArr = s.split('');
  let newArr = [originalArr[0]];
  for (let i = 1; i < originalArr.length; i++) {
    if (originalArr[i] !== originalArr[i-1]) {
      newArr.push(originalArr[i]);
    }
  }
  return originalArr.length - newArr.length;
}

// 2. Making Anagrams- Given two strings,  and , that may or may not be of the same length, determine the minimum number of 
// character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

function makeAnagram(a, b) {
  let bigArr;
  let smallArr;
  let count = 0;
  if (a.length > b.length) {
    bigArr = a.split('');
    smallArr = b.split('');
  }
  else {
    bigArr = b.split('');
    smallArr = a.split('');
  }

  for(let i = 0; i < smallArr.length; i++) {    
    if (bigArr.includes(smallArr[i])) {
      bigArr.splice(bigArr.indexOf(smallArr[i]), 1);
      count++;
    }
  }
  return smallArr.length - count + bigArr.length;
}

// 3. Given a 6x6 array, return the largest number created when adding together the indexes of an hourglass
// 2 2 2
// x 3 x
// 1 5 4 // the 'x's represent numbers not counting toward the "hourglass" shape -> sum is 19
function hourglassSum(arr) {
let largestSum = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i][j] + arr[i][j+1] +
       arr[i][j+2] + arr[i+1][j+1] + 
       arr[i+2][j] + arr[i+2][j+1] + 
       arr[i+2][j+2];
      if(sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  return largestSum;
}
