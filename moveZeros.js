var moveZeroes = function(nums) {
    let startLength = nums.length
    let firstZero = nums.indexOf(0)
    for(let i = startLength -1; i >= firstZero ; i--) {
        if(nums[i] == 0){
            nums.splice(i,1)
        }
    }
    
    let endLength = nums.length
    
    nums.push(...Array(startLength - endLength).fill(0))
};
