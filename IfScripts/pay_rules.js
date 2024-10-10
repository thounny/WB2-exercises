// The regular pay rate per hour
const payRate = 25;
// The total hours the employee worked
const hoursWorked = 50;

// Total pay
let grossPay;

// Check if the employee worked more than 40 hours
if (hoursWorked > 40) {
  // Regular pay for the first 40 hours
  const regularPay = payRate * 40;

  // Calculate overtime hours
  const overtimeHours = hoursWorked - 40;

  // Overtime pay is 1.5 times the regular pay rate
  const overtimePay = overtimeHours * (payRate * 1.5);

  // The total gross pay is the sum of regular pay and overtime pay
  grossPay = regularPay + overtimePay;
} else {
  // If no overtime, the gross pay is just regular pay
  grossPay = payRate * hoursWorked;
}

console.log("Gross Pay: $" + grossPay.toFixed(2));
