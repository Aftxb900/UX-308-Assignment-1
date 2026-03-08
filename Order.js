let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

function welcoming() {
  let aReturn = [];
  currentState = ordering;
  aReturn.push("Welcome to Fast Bites.");
  aReturn.push("Our menu includes Burger and Pizza. What would you like?");
  return aReturn;
}

function ordering(sInput) {
  let aReturn = [];
  currentState = welcoming;

  if (sInput.toLowerCase().startsWith('b')) {
    aReturn.push("You selected Burger.");
    aReturn.push("What size would you like? Small or Large?");
  } 
  else if (sInput.toLowerCase().startsWith('p')) {
    aReturn.push("You selected Pizza.");
    aReturn.push("What size would you like? Small or Large?");
  } 
  else if (sInput.toLowerCase().startsWith('s') || sInput.toLowerCase().startsWith('l')) {
    aReturn.push("Great choice.");
    aReturn.push("Would you like to add toppings like cheese or bacon?");
  } 
  else {
    aReturn.push("Would you like to add a drink to your order?");
    aReturn.push("Your fast food order is being prepared!");
  }
  return aReturn;
}

