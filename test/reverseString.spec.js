const reverseString = require('../src/reverseString');

describe('reverseString', () => {
  test('reverse the strings', () => {
    expect(reverseString('Test')).toBe('tseT');
  });
  test(' reverse the string', () => {
    expect(reverseString('Test with space')).toBe('ecaps htiw tseT');
  });
});
