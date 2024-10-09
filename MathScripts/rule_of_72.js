// Formula | t = 72 / r
// t = number of periods required to double an investment's value
// r = interest rate per period, as a percentage

var r = 6;
var initialInvestment = 200000;
var t = 72 / r;
var doubleAmount = initialInvestment * 2;

console.log(
  "At a " +
    r +
    "% interest rate, your savings account will be worth " +
    doubleAmount.toFixed(2) +
    " in " +
    t.toFixed(1) +
    " years"
);
