import { READY_TO_TEST, generate } from './long-text-generator'

(READY_TO_TEST ? test : test.skip)('hello world - 3', () => {
    let result = generate("hello world", 3);
    expect(result).toStrictEqual("heeellooo wooorld");
});

(READY_TO_TEST ? test : test.skip)('lol - 10', () => {
    let result = generate("lol", 10);
    expect(result).toStrictEqual("looooooooool");
});
