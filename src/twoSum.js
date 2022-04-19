const twoSum = function (arr, target) {
  const map = new Map();
  for (var i = 0; i < arr.length; i++) {
    const remain = target - arr[i];
    if (map.has(remain)) {
      return [map.get(remain), i];
    } else {
      map.set(arr[i], i);
    }
    console.log(map, 'map');
  }
};

const aa = new Map();
aa.set(2, 0);
aa.set(4, 1);
aa.set(7, 2);

// console.log(aa.get(4), 'has');

const arr = [2, 4, 7, 8];
const num = 9;

console.log(twoSum(arr, num));
