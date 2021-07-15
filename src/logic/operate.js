import Big from 'big.js';

const calculate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '/') {
    return num1.div(num2).toString();
  } if (operation === 'X') {
    return num1.times(num2).toString();
  } if (operation === '+') {
    return num1.plus(num2).toString();
  } if (operation === '-') {
    return num1.minus(num2).toString();
  }
  return 'Error';
};

export default calculate;
