const Port = require('../src/Port');

class Ship {
    constructor(currentPort){
        this.currentPort = currentPort;
    };
    setSail() {
    return this.currentPort;
    }
    dock(port) {
        this.currentPort = port;
    }
};


module.exports = Ship  