let url = 'https://leetcode-cn.com/problems/palindrome-number/';

/**
 * 回文数  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false.
 * x = 121  true
 * x = -121 false 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * x = 10 false 从右向左读, 为 01 。因此它不是一个回文数
 */

/**
 * @param {number} x
 * @return {boolean}
 * 判断数组和反转数组的最终拼接成的str是否完全相等
 */
// var isPalindrome = function (x) {
//   const str = x.toString();
//   const arr = [];
//   for (var i = 0; i < str.length; i++) {
//     arr.push(str.charAt(i));
//   }

//   if (arr.join('') === arr.reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 反转数组
// 转成字符串，拆分成数组，反转，转成字符串 等等
// var isPalindrome = function (x) {
//   return x.toString() === x.toString().split('').reverse().join('');
// };

// 数组，数字，字符串转换
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var y = parseInt(x.toString().split('').reverse().join(''));
  return x === y ? true : false;
};

console.log(isPalindrome(13031));
