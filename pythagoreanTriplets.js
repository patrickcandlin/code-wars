/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
// Euclid's formula[3] is a fundamental formula for generating Pythagorean triples given 
// an arbitrary pair of integers m and n with m > n > 0. The formula states that the integers
// a=m^{2}-n^{2},\ \,b=2mn,\ \,c=m^{2}+n^{2}
// if a+b+c = 1000; a=m^2-n^2; b=2mn; c=m^2+n^2 

function findPythagoreanTripletBySum(sum){
    //set the triplet equal to to the sum of three numbers 
    let n = 1
    let m = 2
    let a = (m,n) => m*m - n*n 
    let b = (m,n) => 2*m*n
    let c = (m,n) => m*m + n*n

    while(a(m,n)+ b(m,n) + c(m,n) <= sum){
        if(a+b+c === sum ){
            return `${a}${b}${c}`
        }
        n++
        m++
    }
}

console.log(findPythagoreanTripletBySum(12), '345')
console.log(findPythagoreanTripletBySum(1000), 'something')