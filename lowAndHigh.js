function highAndLow(numbers){
    let sortedNumbers = numbers.split(' ').sort((a,b) => b - a)
    return `${sortedNumbers.slice(0,1)} ${sortedNumbers.slice(sortedNumbers.length-1, sortedNumbers.length)}`
   
  }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")