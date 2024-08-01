import { READY_TO_TEST, getStairCount } from './build-a-staircase'

(READY_TO_TEST ? test : test.skip)('When building a staircase with 1 blocks, you can build 1 stairs', () => {
    let result = getStairCount(1);
    expect(result).toStrictEqual(1);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 2 blocks, you can build 1 stairs', () => {
    let result = getStairCount(2);
    expect(result).toStrictEqual(1);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 3 blocks, you can build 2 stairs', () => {
    let result = getStairCount(3);
    expect(result).toStrictEqual(2);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 4 blocks, you can build 2 stairs', () => {
    let result = getStairCount(4);
    expect(result).toStrictEqual(2);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 6 blocks, you can build 3 stairs', () => {
    let result = getStairCount(6);
    expect(result).toStrictEqual(3);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 9 blocks, you can build 3 stairs', () => {
    let result = getStairCount(9);
    expect(result).toStrictEqual(3);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 20 blocks, you can build 5 stairs', () => {
    let result = getStairCount(20);
    expect(result).toStrictEqual(5);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 21 blocks, you can build 6 stairs', () => {
    let result = getStairCount(21);
    expect(result).toStrictEqual(6);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 22 blocks, you can build 6 stairs', () => {
    let result = getStairCount(22);
    expect(result).toStrictEqual(6);
});

(READY_TO_TEST ? test : test.skip)('When building a staircase with 660 blocks, you can build 35 stairs', () => {
    let result = getStairCount(660);
    expect(result).toStrictEqual(35);
});
