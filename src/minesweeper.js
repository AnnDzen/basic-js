const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    result.push(new Array(cols).fill(0));
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          if (i >= 0 && i < rows && j >= 0 && j < cols) {
            if (!(i === r && j === c)) {
              if (matrix[i][j] === true) {
                result[r][c]++;
              }
            }
          }

        }
      }

    }
  }

  return result;
}

module.exports = {
  minesweeper
};
