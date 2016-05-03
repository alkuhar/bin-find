/**
 * Find an element in a sorted array.
 *
 * @param {array} array Array to find the index of the element
 * @param {number} element Element that needs to be found
 * @returns {number} index Returns the index of the element else returns false
 *
 */

module.exports = function (array, element) {
  return binaryFind(array, element, 0, array.length);

  function binaryFind(array, element, leftSide, rightSide) {
    if(leftSide > rightSide) { return false; }
    var center = Math.trunc((rightSide + leftSide) / 2);
    if(array[center] === element) {
      return center;
    } else {
      return array[center] > element ?
      binaryFind(array, element, leftSide, center - 1) :
      binaryFind(array, element, center + 1, rightSide);
    }
  }
};
