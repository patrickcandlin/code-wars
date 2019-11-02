function sumSquareDifference(num){
    let numSet = Array(num).fill().map((v,i) => i+1)
    return sumSquared(numSet) - sumOfSquares(numSet) 
};

function sumOfSquares(numSet){
    return numSet
            .reduce((total, item) =>total + item*item, 0)
}

function sumSquared(numSet){
    let sum = numSet
                .reduce((total, item) =>total + item,0)
    return sum*sum
}
//test
    console.log(sumSquareDifference(10), 2640);
    console.log(sumSquareDifference(100), 25164150);
