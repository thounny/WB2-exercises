componentCounter = 0;
function moveUp() {
  componentCounter++;
}
function moveDown() {
  componentCounter--;
}
function getCounter() {
  return componentCounter;
}

moveUp();
moveUp();
moveUp();
moveUp();
moveUp();
moveDown();
moveDown();
moveDown();
console.log(getCounter()); // = 2
