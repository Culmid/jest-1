function addNumbers(a, b) {
  if (arguments.length < 2) {
    throw new Error("addNumbers: More Arguments Necessary");
  }

  if (arguments.length > 2) {
    throw new Error("addNumbers: Too Many Arguments");
  }

  return a + b;
}

function subtractNumbers(a, b) {
  if (arguments.length < 2) {
    throw new Error("subtractNumbers: More Arguments Necessary");
  }

  if (arguments.length > 2) {
    throw new Error("subtractNumbers: Too Many Arguments");
  }

  return a - b;
}

function multiplyNumbers(a, b) {
  if (arguments.length < 2) {
    throw new Error("multiplyNumbers: More Arguments Necessary");
  }

  if (arguments.length > 2) {
    throw new Error("multiplyNumbers: Too Many Arguments");
  }

  return a * b;
}

function divideNumbers(a, b) {
  if (arguments.length < 2) {
    throw new Error("divideNumbers: More Arguments Necessary");
  }

  if (arguments.length > 2) {
    throw new Error("divideNumbers: Too Many Arguments");
  }

  return a / b;
}

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
