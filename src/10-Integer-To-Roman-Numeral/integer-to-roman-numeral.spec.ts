import { READY_TO_TEST, integerToRomanNumeral } from './integer-to-roman-numeral';

(READY_TO_TEST ? test : test.skip)('converts an integer to a roman numeral', () => {
  expect(integerToRomanNumeral(0)).toBe('');
  expect(integerToRomanNumeral(1)).toBe('I');
  expect(integerToRomanNumeral(10)).toBe('X');
  expect(integerToRomanNumeral(236)).toBe('CCXXXVI');
  expect(integerToRomanNumeral(2023)).toBe('MMXXIII');
  expect(integerToRomanNumeral(3864)).toBe('MMMDCCCLXIV');
  expect(integerToRomanNumeral(4000)).toBe('');

  
  expect(integerToRomanNumeral(19)).toBe('XIX');
  expect(integerToRomanNumeral(990)).toBe('CMXC');
  expect(integerToRomanNumeral(440)).toBe('CDXL');
});
