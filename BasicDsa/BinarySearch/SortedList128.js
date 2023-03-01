/*
    EXERCISES
    1.1 Use binary search to search for a number in a given array.
*/

const binarySetup = (arr, find) =>  {
  let max = arr.length-1
  let min = 0;
  let middle;
  let guess;

  const binarySearch = () => {
      while(guess !== find) {
        middle = Math.round((max + min)/2);
        guess = arr[middle];
        if(guess === find)  {
          let rightGuess = `The ${guess} is in the ${middle} index`;
          return rightGuess
        }else if(guess > find)  {
          max = middle - 1;
        }else {
          let nonExistent = `The number does not exist inside the given array.`;
          min = middle + 1;
          return nonExistent;
        }
      }
  }
  
  let a = binarySearch()
  return console.log(a)
}
let list = [2,4,6,8,10,12];
console.log(binarySetup(list, 2))
