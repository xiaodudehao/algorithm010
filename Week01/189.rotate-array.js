/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length;
  k = k % length;
  let count = 0;
  for (let i = 0; count < length; i++) {
    let each = i;
    let data = nums[each];
    do {
      let newIndex = (each + k) % length;
      let temp = nums[newIndex];
      nums[newIndex] = data;
      data = temp;
      each = newIndex; //将当前下标保存，用于下次循环。
      count++;
    } while (each != i);
  }
};
