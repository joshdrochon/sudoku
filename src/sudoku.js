// all methods we need will be imported here:
export function sudokuSolver(){

  let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let row2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
  let row3 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
  let row4 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
  let row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
  let row6 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
  let row7 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
  let row8 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
  let row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

  var sudoku = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

  function rowCounter(arr){
  let total = 0;
  for(let i in arr){
    total += arr[i];
  }
    return total;
  }

  var newTotal = 0;
	for(let i=0;i<9;i++){
	  newTotal += rowCounter(sudoku[i]);
	}
  return newTotal;
}

if(sudokuSolver() != 405){
  console.log("Your board is not legal");
}else{
  console.log("Your board is legal");
}

var matrix = [];
for(let i=0;i<9;i++){
  matrix[i] = new Array(9);
}
