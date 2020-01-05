// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const sums = []
    arr.map((row, rowIndex) => {
            row.map((_, columnIndex) => {
                let num = checkIfHourGlass(arr, rowIndex, columnIndex)
                if(!isNaN(num)) sums.push(num)
            })
        })
    return sums.sort((a,b) => b - a )[0]
}
// put all possible hour glasess into an array 
function checkIfHourGlass(arr, row, column){
    let hourGlass = []
        if(checkForNum(arr, row, column +1) 
        && checkForNum(arr,row,column + 2)
        && checkForNum(arr, row + 1, column + 1) 
        && checkForNum(arr,row + 2,column) 
        && checkForNum(arr,row + 2,column + 1) 
        && checkForNum(arr,row + 2,column + 2)
        ){
            hourGlass.push(arr[row][column])
            hourGlass.push(arr[row][column + 1])
            hourGlass.push(arr[row][column + 2])
            hourGlass.push(arr[row + 1][column + 1])
            hourGlass.push(arr[row + 2][column])
            hourGlass.push(arr[row + 2][column + 1])
            hourGlass.push(arr[row + 2][column + 2])
        }
    if(hourGlass.length){
        return hourGlass.reduce((total, num) => total + num, 0)
    }    
    return NaN
}

function checkForNum(arr, row, column){
    if(!!arr[row]) return !isNaN(arr[row][column]) 
    return false
}

let test1 = [
[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]
]

let test2 = [
[-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]
]

let test3 = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]
]

let test4 = [
[-1,  1, -1,  0,  0, 0],
[ 0, -1,  0,  0,  0, 0],
[-1, -1, -1,  0,  0, 0],
[ 0, -9,  2, -4, -4, 0],
[-7,  0,  0, -2,  0, 0],
[ 0,  0, -1, -2, -4, 0]
]
console.log(hourglassSum(test1))
console.log(hourglassSum(test2))
console.log(hourglassSum(test3))
console.log(hourglassSum(test4))
console.log(checkIfHourGlass(test4, 0, 1))
console.log(checkForNum(test1, 7, 0))