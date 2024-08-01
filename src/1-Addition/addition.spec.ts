import { READY_TO_TEST, add } from './addition'

(READY_TO_TEST ? test : test.skip)('Add 1 and 2', () => {
    let result = add(1,2);
    expect(result).toStrictEqual(3);
});
    