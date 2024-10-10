// Given year
const year = 2024;

// A leap year is a year that:
// 1. Is divisible by 4
// 2. If it’s divisible by 100, it must also be divisible by 400

// Assume it's not a leap year
let leapYear = false;

// Check if the year is divisible by 4
if (year % 4 === 0) {
  // If the year is also divisible by 100, check if it's divisible by 400
  if (year % 100 === 0) {
    // If the year is divisible by 400, it's a leap year
    if (year % 400 === 0) {
      leapYear = true;
    }
  } else {
    // If the year is not divisible by 100, but divisible by 4, it's a leap year
    leapYear = true;
  }
}

if (leapYear) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is NOT a leap year");
}
