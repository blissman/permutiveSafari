const greet = require('../src/checkId.js');

describe('greeter', () => {

    it('should say Hello to the World', () => {
        expect(greet('World')).toEqual('Hello, World!');
    });
});