const Factory = require('./factory.js');
const Person  = require('./person.js');
const Address = require('./address.js');

const Client = Object.assign( {}, Person, Address);

module.exports = Client;
