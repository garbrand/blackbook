/* Primitive Types */
const Person = {
    firstname: String,
    lastname:  String
};

Person.fullname = function() {
    return this.firstname+" "+this.lastname;
};

Person.whoami = function() {
    console.log( this.fullname() );
}

module.exports = Person;
