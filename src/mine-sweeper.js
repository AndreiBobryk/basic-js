const { afterEach } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

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
 
  let result = matrix.slice().map((arr) => arr.map((el) => 0));

  matrix.forEach((arr, indexX) => {
    arr.forEach((el, indexY) => {
      if (el) {
        console.log(indexX);
        console.log(indexY);
        if (result[indexX][indexY + 1] >= 0) result[indexX][indexY + 1] += 1;
        if (result[indexX][indexY - 1] >= 0) result[indexX][indexY - 1] += 1;
        if (result[indexX - 1] && result[indexX - 1][indexY] >= 0)
          result[indexX - 1][indexY] += 1;
        if (result[indexX - 1] && result[indexX - 1][indexY + 1] >= 0)
          result[indexX - 1][indexY + 1] += 1;
        if (result[indexX - 1] && result[indexX - 1][indexY - 1] >= 0)
          result[indexX - 1][indexY - 1] += 1;
        if (result[indexX + 1] && result[indexX + 1][indexY] >= 0)
          result[indexX + 1][indexY] += 1;
        if (result[indexX + 1] && result[indexX + 1][indexY + 1] >= 0)
          result[indexX + 1][indexY + 1] += 1;
        if (result[indexX + 1] && result[indexX + 1][indexY - 1] >= 0)
          result[indexX + 1][indexY - 1] += 1;
      }
    });
  });
  return result;
}

module.exports = {
  minesweeper
};
