const Collection = ( type ) => {
    const TYPE = type;
    const repository = [];

    return ( item ) => {
        // if( ! item instanceof TYPE ) throw new TypeError( "Wrong type!" );
        return ( item ) ? repository.push(item) : repository;
    }
}
