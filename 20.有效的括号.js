/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 结题思路：栈的压入和弹出
  // 遇到左括号，压入stack，遇到右括号，查看当前栈顶的元素是否和当前元素配对
  // 如果配对，就弹出栈顶元素，否则不执行任何操作
  // 最终检查栈内的元素数量
  let array = [];
  for (let i of s) {
    if (i === '{' || i === '(' || i === '[') {
      array.push(i);
    } else {
      if (i === '}' && array.pop() !== '{') return false;
      if (i === ']' && array.pop() !== '[') return false;
      if (i === ')' && array.pop() !== '(') return false;
    }
  }
  return !array.length;
};
// @lc code=end

console.log(isValid('a'));
