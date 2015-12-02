const Address = {
    street:    String,
    number:    Number,
    extension: String,
    zip:       String,
    city:      String,
    country:   String
}

Address.fullAddress = function() {
    return this.street+" "+this.number;
}

module.exports = Address;
