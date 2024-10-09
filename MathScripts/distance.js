// Find distance between (x1,y1) and (x2,y2)

// Pythagorean theorem
// square root (x2 - x1)^2 + (y2 - y1)^2

var x1 = 3;
var y1 = 4;

var x2 = 7;
var y2 = 1;

// differences in x and y coordinates
var deltaX = x2 - x1;
var deltaY = y2 - y1;

var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

console.log(
  "The distance between the points (" +
    x1 +
    ", " +
    y1 +
    ") and (" +
    x2 +
    ", " +
    y2 +
    ") is " +
    distance.toFixed(2)
);
