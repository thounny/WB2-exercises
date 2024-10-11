// STEP 3
window.onload = init;

// STEP 4
function init() {
  const greetButton = document.getElementById("greetBtn");
  greetButton.onclick = onGreetUserBtnClicked;
}

// STEP 5
function onGreetUserBtnClicked() {
  // find name text field
  const nameField = document.getElementById("nameField");

  // extract name from text field
  const userName = nameField.value;

  // use name to create a string "Hello ${userName}"
  const greetingMessage = `Hello ${userName}!`;

  // alert display
  alert(greetingMessage);
}
