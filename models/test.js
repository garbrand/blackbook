const Client  = require( './client.js' );
const Factory = require( './factory.js' );


// var Garbrand = Object.create( Person, {
//     firstname: {
//         value: "Garbrand",
//         enumerable: true
//     },
//     lastname: {
//         value: "van der Molen",
//         enumerable: true
//     }
// } );

const Boaz  = Factory( Client, { firstname: "Boaz", lastname: "van der Molen" });
const Boris = Factory( Client, {} );

const People = [];
People.push( Boaz );
People.push( Boris );

Boris.firstname = "Boris";
Boris.lastname = "van der Molen";
Boris.street = "Polluxstraat"
Boris.number = 6;

Boaz.street = "Purmerenderweg"
Boaz.number = 222;

console.log( Boaz.fullname(), Boaz.fullAddress() );
console.log( Boris.fullname(), Boris.fullAddress() );

People.forEach( el => console.log(Object.keys(el) ) );

// Garbrand.firstname = "Gar";
// Garbrand.whoami();
//
// const People = Collection ( Person );
//
//
// const Collection = ( type ) => {
//     const TYPE = type;
//     const repository = [];
//
//     return ( item ) => {
//         // if( ! item instanceof TYPE ) throw new TypeError( "Wrong type!" );
//         return ( item ) ? repository.push(item) : repository;
//     }
// }
