const compressString = function(str, newStr = '', counter=1, index = 0){
    if (index + 1 === str.length) {
      return newStr += `${str[index]}${counter === 1 ? '' : counter }`
    }
    console.log(str[index])
    if(str[index] === str[index + 1]){
      counter++
    }
    if(str[index] !== str[index + 1]){
      newStr += `${str[index]}${counter === 1 ? '' : counter }` 
      counter = 1
    }
    return compressString(str, newStr, counter, ++index)
  
  };
  
  const str1 = 'aabbccddeeeff'
  compressString(str1)