function minSwap(arr){
    const swapInfo = {}
    // look at each item in the array
    arr.map((value, index) => {
        swapInfo[value] = {currentSpot: index + 1}
        swapInfo[value].checked = false
    })
    let count = 0
    for(let index = 0; index < arr.length; index++){
        console.log(swapInfo[index + 1])
        const { currentSpot, checked } = swapInfo[index + 1]
        if(index + 1 === currentSpot || checked){
        }
        else{
            let circuit = 0
            let value = index + 1
            while(!swapInfo[value].checked){
                swapInfo[value].checked = true
                value = swapInfo[value].currentSpot
                circuit++
            } 
            count += circuit - 1
        }
    }
    return count
}

let test1 = [1,2,3,4,5] // 0
let test2 = [5,2,3,4,1] // 1
let test3 = [2,1,4,3,5] // 2
let test4 = [5,1,2,3,4] // 4

console.log(minSwap(test1))
console.log(minSwap(test2))
console.log(minSwap(test3))
console.log(minSwap(test4))