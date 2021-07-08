import Big from 'big';

const mathFunctions = (a, b, simbol) => {
  const n1 = Big(a || '0');
  const n2 = Big(b || '0');

  let result = 0;
  switch (simbol) {
    case '÷':
      result = n1.div(n2);
      break;
    case 'X':
      result = n1.times(n2);
      break;
    case '-':
      result = n1.minus(n2);
      break;
    case '+':
      result = n1.plus(n2);
      break;
    case '=':
      result = n1.Div(n2);
      break;
    default:
      return result.toString();
  }
  return result.toString();
};

export { mathFunctions as default };
