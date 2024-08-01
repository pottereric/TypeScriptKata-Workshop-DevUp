import { READY_TO_TEST, allUnique } from './all-unique'

(READY_TO_TEST ? test : test.skip)('Cassidy', () => {
    let result = allUnique('Cassidy');
    expect(result).toStrictEqual(false);
});

(READY_TO_TEST ? test : test.skip)('cat', () => {
    let result = allUnique('cat');
    expect(result).toStrictEqual(true);
});

(READY_TO_TEST ? test : test.skip)('juxtaposing', () => {
    let result = allUnique('juxtaposing');
    expect(result).toStrictEqual(true);
});

(READY_TO_TEST ? test : test.skip)('brightness', () => {
    let result = allUnique('brightness');
    expect(result).toStrictEqual(false);
});

(READY_TO_TEST ? test : test.skip)('oozing', () => {
    let result = allUnique('oozing');
    expect(result).toStrictEqual(false);
});