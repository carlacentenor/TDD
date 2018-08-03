function sumNumbers(a, b) {
  return a + b;
}

function restNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b
}

function divisionNumers(a, b) {
  if (a == 0 & b == 0) {
    return 'resultado indefinido'
  } else if (a !== 0 && b == 0) {
    return 'no se puede';
  } else {
    return a / b;
  }

}