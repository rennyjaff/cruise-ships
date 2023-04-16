function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },
    removeShip(ship) {
      this.ships = this.ships.filter(shipDeparted => shipDeparted !== ship);
    },
  };

module.exports = Port