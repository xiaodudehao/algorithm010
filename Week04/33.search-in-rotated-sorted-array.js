/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let star = 0;
    let end = nums.length-1;
    while(star <= end){
    //计算中间的下标
    let mid = star + ((end - star)>>1);
    if(nums[mid] == target)return mid
    //判断中间值左右两边哪个是有序的。
        if(nums[star] <= nums[mid]){
            if(target >= nums[star] && target <= nums[mid] ){
                end = mid - 1
            }else{
                star = mid + 1
            }

        }else{
            if(target <= nums[end] && target >= nums[mid] ){
                star = mid + 1

            }else{
                end = mid - 1
            }
        }

    }
    return -1
};