/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
// a^2+b^2=c^2
// c = sqrt(a^2 + b^2)
// = sqrt(a^2 + b^2)
// a < b < c
// 1000 = a + b + sqrt(a^2 + b^2)
// (1000 - b - a)^2 - b^2 = a2
// 1000 = (1000(b-500))/(b-1000) + b + sqrt(((1000(b-500))/(b-1000))^2 + b^2)

function findPythagoreanTripletBySum(sum){
    //set the triplet equal to to the sum of three numbers 
    let a = 3
    let b = 4
    let c = 5
    let multiplier = 1

    while(a+b+c <= sum){
        if(a+b+c === sum ){
            return `${a}${b}${c}`
        }
        multiplier++
        a *= multiplier
        b *= multiplier
        c *= multiplier
    }
   //returns the products that equal the sum
   if (c + b + a === sum)
    return 
}

console.log(findPythagoreanTripletBySum(12), '345')