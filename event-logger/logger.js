const fs = require('fs');
const os = require('os');
const eventEmitter = require('events');

class logger extends eventEmitter {
  log(massage) {
    this.emit("massage", { massage });
  }
}

const logger = new logger()
const logFile = './eventlog.text';

