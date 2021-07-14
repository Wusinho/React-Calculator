import Big from 'big.js';

const calculate = (numberOne, numberTwo, operation) => {
  const n1 = new Big(numberOne || 0);
  const n2 = new Big(numberTwo || 0);
  const n3 = new Big(100);
  let result = 0;
  if (operation === '/') {
    result = (n1.div(n2));
    return result.valueOf();
  } if (operation === 'X') {
    result = (n1.times(n2));
    return result.valueOf();
  } if (operation === '-') {
    result = (n1.minus(n2));
    return result.valueOf();
  } if (operation === '+') {
    result = (n1.plus(n2));
    return result.valueOf();
  } if (operation === '%') {
    result = (n1.div(n3));
    return result.valueOf();
  }
  return result;
};

export { calculate as default };
