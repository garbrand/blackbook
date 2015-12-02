const Factory = ( type, initialState ) => {

    function mapper( state, key ) {
        state[ key ] = {
            value: initialState[ key ],
            enumerable: true
        }
        return state;
    }

    const propertyDescriptors = Object.keys( initialState ).reduce( mapper, {} )

    return Object.create( type, propertyDescriptors );
};

module.exports = Factory;
