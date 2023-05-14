/* globals describe it expect */
const Port = require("../src/Port");

describe("Port", () => {
  describe("ports can be created, added and removed", () => {
    let port;
    let ship;
    let ship2;

    beforeEach(() => {
        port = new Port("Barcelona");
        ship = {};
        ship2 = {};
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("has a name", () => {
      expect(port.name).toBe("Barcelona");
    });
    it("can add a ship", () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });
    it("can remove a ship", () => {

      port.addShip(ship);
      port.addShip(ship2);
      port.removeShip(ship2);

      expect(port.ships).toEqual([ship]);
    });
  });
});
