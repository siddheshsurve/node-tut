const os = require('os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());

module.exports = os;