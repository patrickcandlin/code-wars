// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4
var singleNumber = function(nums) {
    const oneNumber = nums.reduce((singleNum, num) => {
        singleNum[num]
            ? delete singleNum[num] 
            : singleNum[num] = true   
        return singleNum
    },{})
    
    return Object.keys(oneNumber)[0]
};


// var singleNumber = function(nums) {
//     let copyOfNums = [...nums]
//     let currentNum = copyOfNums.shift()
//     if(!copyOfNums.includes(currentNum)) return currentNum
//     else{
//         copyOfNums.push(currentNum)    
//         return singleNumber(copyOfNums)
//     }
// };