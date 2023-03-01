"use strict";

/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
let processes = 0;
function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
        
        processes += 1
        return mid;
    } else if (guess > item) {
        high = mid - 1;
        processes += 1;
    } else {
        low = mid + 1;
        processes += 1;
    }
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9,11,13,15,17];
console.log(binary_search(my_list, 15)); // 1
console.log(binary_search(my_list, -1)); // null
console.log(processes)