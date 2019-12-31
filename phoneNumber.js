function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
  }
 // this is practice editing a file with vim  
  function createPhoneNumber(numbers){
      let numString = numbers.join('')
      return `(${numString.substring(0,3)}) ${numString.substring(3,6)}-${numString.substring(6,10)}`
      
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == "(123) 456-7890");
