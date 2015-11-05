const expect = require( 'chai' ).expect;
const $      = require( './entities.js' );

describe('Entity', () => {
    describe('Person', () => {
        it('should have firstname, lastname and fullname', () => {
            // expect( $.Person ).to.have.keys( ['firstname', 'lastname', 'fullname'] );
        })
    });
    // describe('Address');
    describe('Client', () => {
        it('should be composed of a Person and an Address', () => {
            expect( $.Client )
                .to.include.keys( Object.keys( $.Person ))
                .and
                .to.include.keys( Object.keys( $.Address ))
        });
    });
    describe('Caretaker', () => {
        it('should be composed of a Person and an Address', () => {
            expect( $.Caretaker )
                .to.include.keys( Object.keys( $.Person ))
                .and
                .to.include.keys( Object.keys( $.Address ))
        });
    });
    describe('Factory', () => {
        it('should return a new Model for a Type', () => {
            Object.keys( $ )
                .filter( ( type ) => type.indexOf( 'Factory' ) !== 0 )
                .filter( ( type ) => type.indexOf( 'Collection' ) !== 0 )
                .forEach( ( type ) => expect( $.Factory( $[type] ) ).to.have.keys( $[type] ) );
        });
    });
    describe('Collection', () => {
        it('should hold a Set of entities', () => {
            const clients = $.Collection( $.Client );
            // expect( clients ).to.be.a('function');
            console.log( clients );
            expect( clients() ).to.be.an('array');
        });
    });
});
