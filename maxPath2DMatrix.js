function findMaxPath(currentRow, currentColumn, destRow, destCol) {
  // Base condition
  if (currentRow > destRow || currentColumn > destCol) {
    return 0;
  }
  // Successful path found
  if (currentRow === destRow && currentColumn === destCol) {
     return 1;
  }
  // Finding the number of paths that can be formed from increasing
  // the current row's Count and Current column's count one after the other.
  const pathsInRows = findMaxPath(currentRow + 1, currentColumn, destRow, destCol);
  const pathsInColums = findMaxPath(currentRow, currentColumn + 1, destRow, destCol);
  return (pathsInRows + pathsInColums);
}


function findMaxPathSrcToDes(rows, cols) {
  // Initial rows and columns to begin with.0,0 is the first row and col index we are choosing
  return findMaxPath(0, 0, rows - 1, cols - 1);
}

const num_of_paths = findMaxPathSrcToDes(3, 3);
console.log('Number of Paths', num_of_paths);