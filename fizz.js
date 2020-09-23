//If x is evenly divisible by both 3 and 5 (for example 0 or 15), set result to “fizzbuzz”
//Otherwise if x is evenly divisible by 3 (for example, 3, 6, or 9), set result to “fizz”
//Otherwise if x is evenly divisible by 5(for example, 10 or 15), set result to “buzz”
//If x is not evenly divisible by either 3 or 5 (for example 8), set result to x

//To test your code, set a value for x, and console.log it. Try different values

let result;
const x = 3

if (x % 3 === 0 && x % 5 === 0) {
  result = "fizzbuzz";
} else if (x % 3 === 0) {
  result = "fizz";
} else if (x % 5 === 0) {
  result = "buzz";
} else {
 result = x;
}

console.log(result)




//part 2
//Taking what we learned from the conditionals practice with fizzbuzz, We are going to Loop through every number from 1 to max
//applying those same exact rules to each number and, before ending the loop,
//printing out the result to the console via console.log(result). A For Loop would work


let result;
const max = 100;
for (let x = 1; x <= max; x += 1) {
  if (x % 3 === 0 && x % 5 === 0) {
    result = "fizzbuzz";
  } else if (x % 3 === 0) {
    result = "fizz";
  } else if (x % 5 === 0) {
    result = "buzz";
  } else {
    result = x;
  }
}
console.log(result)