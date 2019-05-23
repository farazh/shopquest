module.exports = function checkDigit(upc_code) {
  const arr = upc_code.toString().trim().split("");
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1 % 2) === 0) {
      sumEven += parseInt(arr[i], 10);
    } else {
      sumOdd += parseInt(arr[i], 10);
    }
  }

  const sum = (3 * sumOdd) + sumEven;
  const check = sum % 10;
  return check > 0 ? 10 - check : check;
}