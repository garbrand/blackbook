/* Primitive Types */
const Person = {
    firstname: String,
    lastname: String
}

Person.fullname = () => {
    console.log( "This", this );
    return `${this.firstname} ${this.lastname}`;
}

const Address = {
    street: String,
    number: Number,
    extension: String,
    zip: String,
    city: String,
    country: String
}

/* Composed Types */
const Client    = Object.assign ( { caretakers: [] }, Person, Address );
const Caretaker = Object.assign ( { clients: [] },    Person, Address );


/* Model Factory and Collection */
const Factory = ( type ) => {
    const model = Object.assign( type, type );
    return Function.prototype.bind.call( model );
};

const Collection = ( type ) => {
    const TYPE = type;
    const repository = [];

    return ( item ) => {
        // if( ! item instanceof TYPE ) throw new TypeError( "Wrong type!" );
        return ( item ) ? repository.push(item) : repository;
    }
}

module.exports = { Person, Address, Client, Caretaker, Factory, Collection };


console.log( 'W00t', process.versions.node );
