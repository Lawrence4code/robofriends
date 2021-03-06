/*  Multiple pointer pattern */

/* Sum Zero */
// two pointer method

function sumZero(arr) {
  // mart the first and last index
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  // loop till leftIndex is less rightIndex
  while (leftIndex < rightIndex) {
    // assign sum as sum of left and right element
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum === 0) {
      // return first sum if found
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      // else if sum is less then zero reduce rightIndex
      rightIndex--;
    } else {
      // else if sum is greater then zero increase rightIndex
      leftIndex++;
    }
  }
}

console.log(sumZero([4, 2, -4, 0, 1, -2, -3, -1, 3]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 6, 7]));
console.log(sumZero([-10, -2, 0, 1, , 3, 6, 7]));
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
