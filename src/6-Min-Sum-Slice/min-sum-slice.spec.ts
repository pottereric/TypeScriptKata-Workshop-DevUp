import { READY_TO_TEST, minSumSlice } from './min-sum-slice'

(READY_TO_TEST ? test : test.skip)('When given the array and a length of 3, the minimum sum is 21, thus 4,8,9 are returned', () => {
    let result = minSumSlice([1,3,20,4,8,9,11],3);
    expect(result).toStrictEqual([4,8,9]);
});

(READY_TO_TEST ? test : test.skip)('When given the array and a length of 2, the minimum sum is 8, thus 4,4 are returned', () => {
    let result = minSumSlice([4,4,4,4,8], 2);
    expect(result).toStrictEqual([4,4]);
});