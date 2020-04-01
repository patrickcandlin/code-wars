// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.
// To generate the nth term, just count and say the n-1th term.
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221 
// 6.     312211
// 7.     13112221
// 8.     1113213211
// 9.     31131211131221
// 10.     13211311123113112211
const countAndSayObj = { 1: '1'};

var countAndSay = function(n, c = 1) {
    if (n === c) return countAndSayObj[c];
    
    while( c < n){      
        let s = ''
        let charCount = 1
        console.log(countAndSayObj[1][0])
        let current = countAndSayObj[c][0]
      for(let i=1; i < countAndSayObj[c].length + 1; i++){
          //and 1 to char if it is the same char we just looked at   
          if(current === countAndSayObj[c][i]){
              charCount += 1
          } else {
              s = s + `${charCount}` + current 
              current = countAndSayObj[c][i]
              charCount = 1
          }
      }
        ++c
        countAndSayObj[c] = s  
    }

    return countAndSayObj[c]
 
};