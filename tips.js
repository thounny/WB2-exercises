const identifier = "value";

const foodCost = 79.25;
const tax = 6.54;
let tip = (12).toFixed(2);
// Wrap 12 into () so it calculates number OBJECT THEN includes 2 decimals

// calculations
const totalDue = foodCost + tax + tip;

console.log(`Food cost is $${foodCost} and tax is $${tax}.
    Tip is $${tip}.
    Total Due is $${totalDue}.
    `);
