function sudoku(puzzle) {
      return checkToSeeIfPuzzleIsFinished(getPossibleNum(turnSudokuToObject(puzzle), puzzle))
  }

function turnSudokuToObject(puzzle){
    let puzzleObject = {}
    puzzle.map((row, rowIndex) => {
        puzzleObject[rowIndex + 1] = {}
        row.map((num, columnIndex) => {
            puzzleObject[rowIndex + 1][columnIndex + 1] = []
            puzzleObject[rowIndex + 1][columnIndex + 1].push(num)
        })        
    })
    return puzzleObject
}

function mapSudokuByColumns(puzzle){
    const puzzleByColumns = Array(9).fill([])
    
    return puzzleByColumns.map((column, columnIndex) => {
       return puzzle.map((row,rowIndex) => {
            return puzzle[rowIndex][columnIndex]
        })})
    
}

function mapSudokuBySubMatrix(puzzle){
    const subMatrixPuzzle = []
    const subMatrix1 = [...puzzle[0].slice(0, 3), ...puzzle[1].slice(0,3), ...puzzle[2].slice(0,3)]
    subMatrixPuzzle.push(subMatrix1)
    const subMatrix2 = [...puzzle[0].slice(3, 6), ...puzzle[1].slice(3,6), ...puzzle[2].slice(3,6)]
    subMatrixPuzzle.push(subMatrix2)
    const subMatrix3 = [...puzzle[0].slice(6, 9), ...puzzle[1].slice(6,9), ...puzzle[2].slice(6,9)]
    subMatrixPuzzle.push(subMatrix3)
    const subMatrix4 = [...puzzle[3].slice(0, 3), ...puzzle[4].slice(0,3), ...puzzle[5].slice(0,3)]
    subMatrixPuzzle.push(subMatrix4)
    const subMatrix5 = [...puzzle[3].slice(3, 6), ...puzzle[4].slice(3,6), ...puzzle[5].slice(3,6)]
    subMatrixPuzzle.push(subMatrix5)
    const subMatrix6 = [...puzzle[3].slice(6, 9), ...puzzle[4].slice(6,9), ...puzzle[5].slice(6,9)]
    subMatrixPuzzle.push(subMatrix6)
    const subMatrix7 = [...puzzle[6].slice(0, 3), ...puzzle[7].slice(0,3), ...puzzle[8].slice(0,3)]
    subMatrixPuzzle.push(subMatrix7)
    const subMatrix8 = [...puzzle[6].slice(3, 6), ...puzzle[7].slice(3,6), ...puzzle[8].slice(3,6)]
    subMatrixPuzzle.push(subMatrix8)
    const subMatrix9 = [...puzzle[6].slice(6, 9), ...puzzle[7].slice(6,9), ...puzzle[8].slice(6,9)]
    subMatrixPuzzle.push(subMatrix9)
    return subMatrixPuzzle
}

function findSubMatrix(row, column){
    if((row <= 3  && column <= 3) ){
        return 0
    }else if(row <= 3 && column <= 6){
        return 1
    }else if(row <= 3 && column <= 9){
        return 2
    }else if(row <= 6 && column <= 3){
        return 3
    }else if(row <= 6 && column <= 6){
        return 4
    }else if(row <= 6 && column <= 9){
        return 5
    }else if(row <= 9 && column <= 3){
        return 6
    }else if(row <= 9 && column <= 6){
        return 7
    }else if(row <= 9 && column <= 9){
        return 8
    }
}

function getPossibleNum(puzzleObject, puzzle){
    const puzzleByColumns = mapSudokuByColumns(puzzle)
    const puzzleByMatrix = mapSudokuBySubMatrix(puzzle)
    for(row=1; row < 10; row++ ){
        for(column=1; column < 10; column++){
            if(puzzleObject[row][column].includes(0)){
                puzzleObject[row][column] = []
                for(checkRow=1;  checkRow < 10; checkRow++){
                    if(!puzzle[row-1].includes(checkRow) && !puzzleByColumns[column-1].includes(checkRow) && !puzzleByMatrix[findSubMatrix(row, column)].includes(checkRow)){
                        puzzleObject[row][column].push(checkRow)
                    }
                }
            }
        }
    }
    return puzzleObject
}

function checkToSeeIfPuzzleIsFinished(puzzleObject) {
    let isFinished = true
    for(row=1; row < 10; row++ ){
        for(column=1; column < 10; column++){
            if(puzzleObject[row][column].length > 1){
                puzzleObject[row][column] = [0]
                isFinished = false
            }
        }
    }
    const solution = mapPuzzleObjectBackToPuzzle(puzzleObject)
    
    if(isFinished){
        return solution
    }else{
        return sudoku(solution)
    }
}

function mapPuzzleObjectBackToPuzzle(puzzleObject){
    const solvedPuzzle = Array(9).fill([])

    for(row=1; row < 10; row++ ){
        for(column=1; column < 10; column++){
            solvedPuzzle[row-1] = [ ...solvedPuzzle[row-1], ...puzzleObject[row][column]]
        }
    }
    return solvedPuzzle
}
    
var puzzle = [
        [5,3,0,  0,7,0,  0,0,0],
      [6,0,0,  1,9,5,  0,0,0],
      [0,9,8,  0,0,0,  0,6,0],

      [8,0,0,  0,6,0,  0,0,3],
      [4,0,0,  8,0,3,  0,0,1],
      [7,0,0,  0,2,0,  0,0,6],

      [0,6,0,  0,0,0,  2,8,0],
      [0,0,0,  4,1,9,  0,0,5],
      [0,0,0,  0,8,0,  0,7,9]];

    var solution = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]];

      let myAnswer = sudoku(puzzle)
    
      console.log(myAnswer[1][1] == solution[1][1]  )
