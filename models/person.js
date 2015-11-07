/* Primitive Types */
const Person = () => {
    let state = this;

    state.firstname: String,
    state.lastname:  String
}

// Delegate methods (to be stored on the prototype)
Person.fullname = () => {
    console.log( "This", this );
    return `${this.firstname} ${this.lastname}`;
};
