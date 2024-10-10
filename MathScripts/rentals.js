// X people on tour
const people = 38;

// Charter vans seat 15 passengers
// How many vans needed

const vansNeeded = people / 15;

// vans cost 250$ per day + including cost of driver
const vanPrice = 250;
// how much will it cost to rent vans
const cost = vanPrice * Math.ceil(vansNeeded);

// cost if split per person
const split = cost / people;

// total charge per person if split
const totalCharge = split.toFixed(2) * people;

console.log("It will cost $" + cost + " total to rent the vans");
console.log(
  "It will cost $" + split.toFixed(2) + " per person if you split the cost"
);

console.log("The total charge is $" + totalCharge.toFixed(2) + "");

// floating point error

