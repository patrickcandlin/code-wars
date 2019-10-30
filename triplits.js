var recoverSecret = function(triplets) {
    let secret = ""
    triplets.map((triplet) =>{
        triplet.map((letter)  => {
           if(!secret.includes(letter)){
               secret = secret + letter
           } 
        })
    })
    const tripletsObj = compairTriplets(triplets)
    return sortString(secret.split(''), tripletsObj) 

}

function compairTriplets(triplets, compairObj = {}){
    if(triplets.length == 0) return compairObj;
    let triplet = triplets.shift()
    compairTriplet(triplet, compairObj)
    return compairTriplets(triplets, compairObj)
}

function compairTriplet(triplet, compairObj = {}){
    if(triplet.length == 0) return compairObj;
    let key = triplet.shift()
    if(compairObj[key]){
        compairObj[key] = [...compairObj[key], ...triplet] 
    }else{
        compairObj[key] = [...triplet]
    }
    return compairTriplet(triplet, compairObj)
}

function sortString(unsortedArr, compairObj,  sortedArr=[]) {
    if(unsortedArr.length == 0) return sortedArr.join('');
    let testLetter = unsortedArr.shift()
    

    let truthTest =  unsortedArr.map(letter => compairObj[letter].includes(testLetter))
    if(!truthTest.includes(true) ){
        sortedArr.push(testLetter)
        compairObj[testLetter] = []
    }else{
        unsortedArr.push(testLetter)
    }

    return sortString(unsortedArr, compairObj, sortedArr)
}

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(recoverSecret(triplets1), secret1);