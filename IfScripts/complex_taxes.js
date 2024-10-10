// Pay rate and hours worked
const hourlyWage = 10.0; // You earn $10.00 per hour
const hoursWorked = 45; // You worked 45 hours this week

// Calculate weekly pay
let weeklyPay;

if (hoursWorked > 40) {
  // Regular pay for the first 40 hours
  const regularPay = hourlyWage * 40;

  // Calculate overtime pay (extra hours paid at 1.5x)
  const overtimeHours = hoursWorked - 40; // How many hours are overtime?
  const overtimePay = overtimeHours * (hourlyWage * 1.5); // Pay for overtime hours

  // Total pay is regular pay plus overtime pay
  weeklyPay = regularPay + overtimePay;
} else {
  // If no overtime, just calculate regular pay
  weeklyPay = hourlyWage * hoursWorked;
}

// Estimate annual pay
const annualPay = weeklyPay * 52;

// Filing status "Single" or "Joint"
const filingStatus = "Single";

// Set the tax rate based on filing status and annual pay
let taxRate;

if (filingStatus === "Single") {
  if (annualPay < 12000) {
    taxRate = 0.05; // 5% tax
  } else if (annualPay < 25000) {
    taxRate = 0.1; // 10% tax
  } else if (annualPay < 75000) {
    taxRate = 0.15; // 15% tax
  } else {
    taxRate = 0.2; // 20% tax
  }
} else if (filingStatus === "Joint") {
  if (annualPay < 12000) {
    taxRate = 0.0; // 0% tax
  } else if (annualPay < 25000) {
    taxRate = 0.06; // 6% tax
  } else if (annualPay < 75000) {
    taxRate = 0.11; // 11% tax
  } else {
    taxRate = 0.2; // 20% tax
  }
}

// Calculate tax for the current week
const weeklyTax = weeklyPay * taxRate; // Tax taken from your pay

// Calculate net pay (pay after tax)
const netPay = weeklyPay - weeklyTax;

console.log("You worked " + hoursWorked + " hours this week.");
console.log(
  "Because you earn $" +
    hourlyWage +
    " per hour, your gross pay is $" +
    weeklyPay.toFixed(2)
);
console.log("Your filing status is " + filingStatus);
console.log("Tax withheld this week is $" + weeklyTax.toFixed(2));
console.log("Your net pay after tax is $" + netPay.toFixed(2));
