function validSolution(board){
    let rowTotals = board
             .map((row) => row.reduce((a,b) => a+b,0))
             .map(total => total === 45)
             .includes(false)
 
     
     let columnTotals = board
     // map column to array 
             .map((row, rowIndex) => {
                 return row.map((_, columnIndex) => {
                  return board[columnIndex][rowIndex]  
                 })
             })
             .map((row) => row.reduce((a,b) => a+b,0))
             .map(total => total === 45)
             .includes(false)
     // map subMatrix to array then check if the totals equal 
     let subMatrixTotals = mapSudokuBySubMatrix(board)
             .map((row) => row.reduce((a,b) => a+b,0))
             .map(total => total === 45)
             .includes(false) 
     return !rowTotals && !columnTotals && !subMatrixTotals
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
 
 
 console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                            [6, 7, 2, 1, 9, 5, 3, 4, 8],
                            [1, 9, 8, 3, 4, 2, 5, 6, 7],
                            [8, 5, 9, 7, 6, 1, 4, 2, 3],
                            [4, 2, 6, 8, 5, 3, 7, 9, 1],
                            [7, 1, 3, 9, 2, 4, 8, 5, 6],
                            [9, 6, 1, 5, 3, 7, 2, 8, 4],
                            [2, 8, 7, 4, 1, 9, 6, 3, 5],
                            [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
                                 
 console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                                  [6, 7, 2, 1, 9, 0, 3, 4, 8],
                                  [1, 0, 0, 3, 4, 2, 5, 6, 0],
                                  [8, 5, 9, 7, 6, 1, 0, 2, 0],
                                  [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                  [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                  [9, 0, 1, 5, 3, 7, 2, 1, 4],
                                  [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                  [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);
                                 
 console.log(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                            [2, 3, 1, 5, 6, 4, 8, 9, 7],
                            [3, 1, 2, 6, 4, 5, 9, 7, 8],
                            [4, 5, 6, 7, 8, 9, 1, 2, 3],
                            [5, 6, 4, 8, 9, 7, 2, 3, 1],
                            [6, 4, 5, 9, 7, 8, 3, 1, 2],
                            [7, 8, 9, 1, 2, 3, 4, 5, 6],
                            [8, 9, 7, 2, 3, 1, 5, 6, 4],
                            [9, 7, 8, 3, 1, 2, 6, 4, 5]]), false)
 
                            console.log(1+2+3+4+5+6+7+8+9)