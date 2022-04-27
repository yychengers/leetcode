import { swap } from './util/index.js';

// 排序算法
// 本文件详细研究js中的各种排序算法，做好归纳总结

// 选择排序算法
// function selectSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     let min = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         // 找出最小的一个元素
//         min = j;
//       }
//     }
//     console.log(min, 'min');
//     // 交换位置
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// }

function selectSort(arr) {
  // 找出最小的元素
  // 将最小的元素和数组第一个位置的元素交换

  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
const arr = [4, 3, 1];
console.log(selectSort(arr));
