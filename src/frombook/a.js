// // 背包问题

// console.time('time');

// const N = 10000000000000;
// console.log(N);
// console.log(Math.log(N));
// console.log(N * N);
// console.timeEnd('time');

// const arr = [1, 3, 5, 8];
// const sum = 8;

// const twoSum = (arr, sum) => {
//   console.time('time');
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         console.timeEnd('time');
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// const arr = [1, 3, 5, 8];
// const sum = 8;
// const twoSumFast = (arr, sum) => {
//   let minIndex = 0;
//   maxIndex = arr.length - 1;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[minIndex] + arr[maxIndex] > sum) {
//       maxIndex = maxIndex - 1;
//       continue;
//     }
//     if (arr[minIndex] + arr[maxIndex] < sum) {
//       minIndex = minIndex + 1;
//       continue;
//     }
//     return [arr[minIndex], arr[maxIndex]];
//   }
// };
// console.log(twoSumFast(arr, sum));

function mySort(arr) {
  const less = (v, w) => {
    return v - w < 0;
  };
  const exch = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  };
  const show = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i] + ' ');
      console.log('\n');
    }
  };
  const isSorted = (arr) => {
    for (var i = 1; i < arr.length; i++) {
      if (less(arr[i], arr[i - 1])) {
        return false;
      }
    }
  };
}

const arr = [1, 4, 6, 3, 2, 8];
mySort(arr);
