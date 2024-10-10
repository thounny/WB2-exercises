// Define the dimensions of the room (length and width)
const roomLength = 15;
const roomWidth = 10;

// Calculate the area of the room (length * width)
const area = roomLength * roomWidth;

// Calculate the total number of tiles needed (1 tile per square foot)
const totalTiles = area;

// Add 10% extra tiles for breakage (multiply total by 1.10)
const tilesWithExtra = totalTiles * 1.1; // 10% more tiles

// Each box contains 12 tiles, so divide by 12
const boxesNeeded = Math.ceil(tilesWithExtra / 12); // Use Math.ceil to round up

// Output the result
console.log("You will need " + boxesNeeded + " boxes of tiles.");
