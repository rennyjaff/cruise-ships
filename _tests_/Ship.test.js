/* globals describe it expect */ 
const Ship = require('../src/Ship');

describe("Ship", () => {
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const ship = new Ship("Dover");
        const QE2 = new Ship("Belfast");

        expect(ship.startingPort).toBe("Dover");
        expect(QE2.startingPort).toBe("Belfast");
    })
});

