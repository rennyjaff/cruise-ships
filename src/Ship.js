const Port = require('../src/Port');

class Ship {
    constructor(currentPort){
        this.currentPort = currentPort;
    };
    setSail() {
    return this.currentPort;
    }
};


module.exports = Ship  