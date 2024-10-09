// Federal Taxes are 23% of your salary every month.
// You make X amount of money. How much is withheld for taxes?

// Display taxes with 2 digits of precision using toFixed().

// $3000 every month
var salary = 3000;

// 23% as decimal
var taxRate = 0.23;

// amount withheld taxes
var taxesWithheld = salary * taxRate;

console.log(
  "The amount withheld for federal taxes is $" + taxesWithheld.toFixed(2)
);
