/**
 * map结构搞一下 一层循环 时间复杂度 O(n);
 */
// const twoSum = function (arr, target) {
//   const map = new Map();
//   for (var i = 0; i < arr.length; i++) {
//     const remain = target - arr[i];
//     if (map.has(remain)) {
//       return [map.get(remain), i];
//     } else {
//       map.set(arr[i], i);
//     }
//     console.log(map, 'map');
//   }
// };

// 暴力搞一下 两层循环  时间复杂度 O(n2);
const twoSum = function (arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// const aa = new Map();
// aa.set(2, 0);
// aa.set(4, 1);
// aa.set(7, 2);

// console.log(aa.get(4), 'has');

const arr = [2, 4, 7, 8];
const num = 9;

console.log(twoSum(arr, num));
