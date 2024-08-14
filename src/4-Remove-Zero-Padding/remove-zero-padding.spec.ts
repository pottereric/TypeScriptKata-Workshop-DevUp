import { READY_TO_TEST, RemovePadding } from './remove-zero-padding'

(READY_TO_TEST ? test : test.skip)('When there are leading and trailing 0s, they are removed.', () => {
    let result = RemovePadding([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]);
    expect(result).toStrictEqual([3, 1, 4, 1, 5, 9]);
});

(READY_TO_TEST ? test : test.skip)('Where are are only 0s, an empty array is returned', () => {
    let result = RemovePadding([0, 0, 0]);
    expect(result).toStrictEqual([]);
});

(READY_TO_TEST ? test : test.skip)('Where are are no 0s, the array is returned unchanged', () => {
    let result = RemovePadding([8]);
    expect(result).toStrictEqual([8]);
});