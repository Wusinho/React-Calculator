import Operate from '../../logic/operate';

describe('Calculate operations', () => {
  it('Should return an string', () => {
    const result = Operate('5', '4', '+');
    expect(typeof result).toEqual('string');
  });
  it('Should be a function', () => {
    expect(typeof Operate).toEqual('function');
  });
  it('Should sum up two numbers', () => {
    const result = Operate('5', '4', '+');
    expect(result * 1).toBe(9);
  });
  it('Should substract two numbers', () => {
    const result = Operate('6', '4', '-');
    expect(result * 1).toEqual(2);
  });
  it('Should return a divided value', () => {
    const result = Operate('8', '4', '/');
    expect(result * 1).toEqual(2);
  });
  it('Should return an Error message', () => {
    const result = Operate('3', '0', '/');
    expect(result).toEqual('Error, not divisible');
  });
  it('Should return a multipliyed value', () => {
    const result = Operate('3', '4', 'X');
    expect(result * 1).toEqual(12);
  });
});
