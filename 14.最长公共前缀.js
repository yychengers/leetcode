/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs == null || !strs.length) return '';

  let prefix = strs[0];
  let n = strs.length;

  // 先求出任意两个字符串的最小长度
  const getLongest = (str1, str2) => {
    let minLength = Math.min(str1.length, str2.length);
    let commonIndex = 0;
    while (
      commonIndex <= minLength &&
      str1[commonIndex] === str2[commonIndex]
    ) {
      commonIndex++;
    }
    return str1.substr(0, commonIndex);
  };

  // 循环遍历strs数组，任一个跟之前最小的prefix比较，赋值prefix为其中较小的
  for (var i = 1; i < strs.length; i++) {
    prefix = getLongest(prefix, strs[i]);
    if (!prefix.length) {
      return prefix;
    }
  }
  return prefix;

  // ---------------

  // let ans = '';
  // for (const ch of strs[0]) {
  //   if (
  //     !strs.every((str) => {
  //       console.log(ch, 'ch');
  //       return str.startsWith(ans + ch);
  //     })
  //   ) {
  //     break;
  //   }
  //   ans += ch;
  // }
  // return ans;
};
// @lc code=end

// --------------------

let strs = ['flower', 'flow', 'flight']; // 输出 fl
// let strs = ['dog', 'racecar', 'car']; // 输出 ''

console.log(longestCommonPrefix(strs));

const testFor = () => {
  for (var i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }
    console.log(i, 'ii');
  }
};

// testFor();
