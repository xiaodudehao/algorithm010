/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len = m + n - 1;
  m = m - 1;
  n = n - 1;

  while (m >= 0 && n >= 0) {
    nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }
  arrayCopy(nums2, 0, nums1, 0, n + 1);
};
