import Big from 'big.js';

// eslint-disable-next-line consistent-return
const mathFunctions = (a, b, symbol) => {
  const n1 = new Big(a || 0);
  const n2 = new Big(b || 0);
  const n3 = new Big(100);
  let result = 0;
  if (symbol === '/') {
    result = (n1.div(n2));
    return result.valueOf();
  } if (symbol === 'X') {
    result = (n1.times(n2));
    return result.valueOf();
  } if (symbol === '-') {
    result = (n1.minus(n2));
    return result.valueOf();
  } if (symbol === '+') {
    result = (n1.plus(n2));
    return result.valueOf();
  } if (symbol === '%') {
    result = (n1.div(n3));
    return result.valueOf();
  }
};

export { mathFunctions as default };
