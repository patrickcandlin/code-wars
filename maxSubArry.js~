function maxSubArray(nums){
    let max = nums[0];
    let sum = 0
    nums.map((num) => {
    if (num >= num + sum){
        sum = num
    } else {
        sum = num + sum        
    }
    if(sum > max){
        max = sum
    }
   })
    return max
}
