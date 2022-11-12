const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  test(' return first latter of string capitalized', () => {
    expect(capitalize('test')).toBe('Test');
  });
  test(' return first latter of string capitalized', () => {
    expect(capitalize('test with space')).toBe('Test with space');
  });
});
