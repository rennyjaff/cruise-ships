/* globals describe it expect */ 
const Ship = require('../src/Ship');

describe('Ship', () => {
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});