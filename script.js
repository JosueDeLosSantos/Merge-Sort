//Merge sort

const listArr = [-25, -30, 120, 55, 3, 6, 11, 85, 97, 45, 19, 2, 1, 8, 9, 11];

console.log(mergeArr(listArr));
// [-30, -25, 1, 2, 3, 6, 8, 9, 11, 11, 19, 45, 55, 85, 97, 120]
function mergeArr(array) {
  if (array.length <= 1) return array;

  const half = Math.ceil(array.length / 2);
  const firstHalf = mergeArr(array.slice(0, half)); // ordered list
  const secondHalf = mergeArr(array.slice(half)); //ordered list
  // Merge
  return fixEquivalent(firstHalf, secondHalf); // combined ordered list
}

// this function combines both arrays in the right order
function fixEquivalent(arr1, arr2) {
  const arr3 = [];

  while (arr1[0] && arr2[0]) {
    arr1[0] < arr2[0] ? arr3.push(arr1.shift()) : arr3.push(arr2.shift());

    if (arr1[0] == arr2[0]) {
      arr3.push(arr1.shift());
      arr3.push(arr2.shift());
    }
  }

  if (arr1.length == 0 && arr2.length != 0) {
    while (arr2.length != 0) {
      arr3.push(arr2.shift());
    }
  }

  if (arr2.length == 0 && arr1.length != 0) {
    while (arr1.length != 0) {
      arr3.push(arr1.shift());
    }
  }

  if (arr2.length == 0 && arr1.length == 0) return arr3;
}
