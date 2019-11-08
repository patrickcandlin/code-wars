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
//(8, 15, 17)
// 8 = a = 17 - 2n^{2}; b = 15/2m = n ; 17 - n^2 = m^2
// 9/2 = a = n^{2}; b = 15/2m = n ; 17 - n^2 = m^2
function findPythagoreanTripletBySum(sum){
    //set the triplet equal to to the sum of three numbers 
    let n = 1
    let m = 2
    let k = 1
    function a(n,m,k){
        return  k*(m*m - n*n) 
    }
    function b(n,m,k){
        return  2*m*n*k
    }
    function c(n,m,k){
        return  k*(m*m + n*n)
    }
    while(a(n,m,k)+ b(n,m,k) + c(n,m,k) <= sum){
        if(a(n,m,k)+ b(n,m,k) + c(n,m,k) === sum ){
            return `(${a(n,m,k)},${b(n,m,k)},${c(n,m,k)})`
        }
        while(a(n,m,k)+ b(n,m,k) + c(n,m,k) <= sum){
            if(a(n,m,k)+ b(n,m,k) + c(n,m,k) === sum ){
                return `(${a(n,m,k)},${b(n,m,k)},${c(n,m,k)})`
            }
            m++
        }
        k = 1
        m = n + 1
        while(a(n,m,k)+ b(n,m,k) + c(n,m,k) <= sum){
            if(a(n,m,k)+ b(n,m,k) + c(n,m,k) === sum ){
                return `(${a(n,m,k)},${b(n,m,k)},${c(n,m,k)})`
            }
            k++
        }
        k = 1
        m = n + 1
        n++
        m++
    }
    return `(${a(n,m)},${b(n,m)},${c(n,m)})`
}

console.log(findPythagoreanTripletBySum(12), '(3,4,5)')
console.log(findPythagoreanTripletBySum(9+12+15), '(9,12,15)')
console.log(findPythagoreanTripletBySum(5+12+13),'(5,12,13)')
console.log(findPythagoreanTripletBySum(8+15+17),'(8,15,17)')
console.log(findPythagoreanTripletBySum(7+24+25),'(7,24,25)')
console.log(findPythagoreanTripletBySum(20+21+29),'(20,21,29)')
console.log(findPythagoreanTripletBySum(12+35+37),'(12,35,37)')
console.log(findPythagoreanTripletBySum(9+40+41),'(9,40,41)')
console.log(findPythagoreanTripletBySum(28+45+53),'(28,45,53)')
console.log(findPythagoreanTripletBySum(11+60+61),'(11,60,61)')
console.log(findPythagoreanTripletBySum(16+63+65),'(16,63,65)')
console.log(findPythagoreanTripletBySum(33+56+65),'(33,56,65)')
console.log(findPythagoreanTripletBySum(48+55+73),'(48,55,73)')
console.log(findPythagoreanTripletBySum(13+84+85),'(13,84,85)')
console.log(findPythagoreanTripletBySum(36+77+85),'(36,77,85)')
console.log(findPythagoreanTripletBySum(39+80+89),'(39,80,89)')
console.log(findPythagoreanTripletBySum(65+72+97),'(65,72,97)')
console.log(findPythagoreanTripletBySum(1000), '(200, 375, 425)', 200*200 +375*375 === 400*400,  )