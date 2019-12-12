import StringToNumberFunc from './app';

test('if input is not a number', () => {
    const input = 'hello';

    const expected = 'Error: hello is not an integer in decimal';
    const recieved = StringToNumberFunc(input);
    expect(recieved).toBe(expected);
});

test('if input is not decimal', () => {
    const input = '2AE';

    const expected = 'Error: 2AE is not an integer in decimal';
    const recieved = StringToNumberFunc(input);
    expect(recieved).toBe(expected);
});

test('decimal number', () => {
    const input = '3';

    const expected = 3;
    const recieved = StringToNumberFunc(input);
    expect(recieved).toBe(expected);
});