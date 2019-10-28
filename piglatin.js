
function pigIt(str){
  return str.split(' ')
      .map( word => {
          return word.substring(1,word.length) + word.substring(0,1) + 'ay' 
      })
      .join(' ')
}


function pigIt(str){
  let word = ''
  const piggedStr = []
  //loop through the string
  for(i = 0; i < str.length; i++) {
       //add the words to an array
      if(str[i] == ' '){
          piggedStr.push(word)
          word = ''
      }if(i == str.length - 1){
          word = word + str[i]
          piggedStr.push(word)
      }
      else{
          if(str[i] !== ' '){
              word = word + str[i]
          }
      }
  }
  //rearage the words in the array to the rules of piglatin
  //recombin the array back into a string

  return piggedStr
          .map(word => word.substring(1, word.length) + word.substring(0,1) + 'ay')
          .reduce((str, pigword, index) => index < piggedStr.length-1 ?  str + `${pigword} `  : str + `${pigword}`, '')
} 
console.log(pigIt('Pig latin is cool') == 'igPay atinlay siay oolcay', 'igPay atinlay siay oolcay');  
console.log(pigIt('This is my string') == 'hisTay siay ymay tringsay', 'hisTay siay ymay tringsay');