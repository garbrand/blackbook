const $ = require('./entities.js');

const Client     = $.Client;
const Caretaker  = $.Caretaker;
const Factory    = $.Factory;
const Collection = $.Collection;


// Clients:
const Boaz = Factory ( Client );
Boaz.firstname = "Boaz";
Boaz.lastname = "van der Molen";

const Boris = Factory ( Client );
Boris.firstname = "Boris";
Boris.lastname = "van der Molen";

// Clients Collection:
const Clients = Collection ( Client );
Boaz.id  = Clients( Boaz );
Boris.id = Clients( Boris );

// Caretaker:
const Gar = Factory ( Caretaker );
Gar.firstname = "Garbrand";
Gar.lastname = "van der Molen";
Gar.id = 1;

// Relationships:
Gar.clients.push( Boaz.id );
Boaz.caretakers.push( Gar.id );

console.dir( Gar );
console.dir( Clients()[0] );
