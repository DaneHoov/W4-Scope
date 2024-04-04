/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/
const arrowRestSum = (...nums) => {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum

  // for (let i = 0; i < nums.length - 1; i++) {
  //   let el = nums[i]
  //   num = el + nums[i + 1]
  //   console.log(num)
  // }
  // return num;
}

arrowRestSum(3, 5, 6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
