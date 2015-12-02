var Person = {
    firstname: String,
    lastname:  String,

    fullname: () => {
        return `${this.firstname} ${this.lastname}`
    }
}

const m = Object.assign( {}, Person );
const y = Object.assign( {}, Person );

m.firstname = "Em";
y.firstname = "Joe";

console.log( m.fullname(), y.fullname() );

Person.firstname = "Voor";
Person.lastname = "Achter";

console.log( Person.firstname, Person.lastname, Person.fullname() );
