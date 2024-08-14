import { READY_TO_TEST, romanNumeralToInteger } from './roman-numeral-to-integer';

(READY_TO_TEST ? test : test.skip)('converts a Roman numeral to an integer', () => {
  expect(romanNumeralToInteger('I')).toBe(1);
  expect(romanNumeralToInteger('II')).toBe(2);
  expect(romanNumeralToInteger('III')).toBe(3);
  expect(romanNumeralToInteger('X')).toBe(10);
  expect(romanNumeralToInteger('VI')).toBe(6);
  expect(romanNumeralToInteger('XI')).toBe(11);
  expect(romanNumeralToInteger('IV')).toBe(4);
  expect(romanNumeralToInteger('IX')).toBe(9);
  expect(romanNumeralToInteger('XIV')).toBe(14);
  expect(romanNumeralToInteger('CCXXXVI')).toBe(236);
  expect(romanNumeralToInteger('MMXXIII')).toBe(2023);
  expect(romanNumeralToInteger('MMMDCCCLXIV')).toBe(3864);
  expect(romanNumeralToInteger('MMMCMXCIX')).toBe(3999);
});
