import { READY_TO_TEST, solve } from './fizzbuzz'

(READY_TO_TEST ? test : test.skip)('2 should return 2', () => {
    let result = solve(3);
    expect(result).toStrictEqual("2");
});

(READY_TO_TEST ? test : test.skip)('3 should return fizz', () => {
    let result = solve(3);
    expect(result).toStrictEqual("fizz");
});

(READY_TO_TEST ? test : test.skip)('5 should return buzz', () => {
    let result = solve(3);
    expect(result).toStrictEqual("buzz");
});

(READY_TO_TEST ? test : test.skip)('15 should return fizzbuzz', () => {
    let result = solve(3);
    expect(result).toStrictEqual("fizzbuzz");
});

