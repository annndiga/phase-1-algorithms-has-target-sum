function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set(); // Create a set to store the numbers seen so far

  for (let num of array) {
    const complement = target - num; // Calculate the complement for the current number

    if (numSet.has(complement)) {
      return true; // Found a pair that adds up to the target
    }

    numSet.add(num); // Add the current number to the set
  }

  return false; // No pair adds up to the target
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
1. Create an empty set called numSet.
2. Iterate through each number (num) in the array.
   - Calculate the complement by subtracting num from the target.
   - If the complement exists in numSet, return true (found a pair that adds up to the target).
   - Add num to numSet.
3. If no pair adds up to the target, return false.
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
