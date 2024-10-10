// Define three numbers
const a = 24;
const b = 10;
const c = 5;

// Find the maximum using if/else
let max;
if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}

// Find the minimum using if/else
let min;
if (a <= b && a <= c) {
  min = a;
} else if (b <= a && b <= c) {
  min = b;
} else {
  min = c;
}

console.log("The maximum value is: " + max);
console.log("The minimum value is: " + min);
