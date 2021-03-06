var randomstring = require("randomstring");
var country = require('./country');
var filter_state_names = [];
var filter_cities_names = [];

function seperate_filter(){
    // console.log(country.country.states);
    country.country.states.find(x => {
        filter_state_names.push(x.name_state);
        filter_cities_names.push(x.city);
    })
}

seperate_filter();

var string_object = {
    StudentCode: randomstring.generate(7),
    StudentName: randomstring.generate(10),
    Address_1: randomstring.generate(20),
    Address_2: randomstring.generate(20),
    CountryName: country.country.name,//country Object
    StateName: filter_state_names,//state Object
    CityName: filter_cities_names,//city Object
    Department_Name: randomstring.generate(7),
    SubjectName: randomstring.generate(7)
}

var integer_object = {
    StudentId: '',
    CountryId: '',
    StateId: '',
    CityId: '',
    DepartmentId: '',
    Pincode: '',
    PhoneNumber: '',
    MobileNumber: ''
}


console.log('String Object  -> ',string_object);
console.log('Integer Object - > ',integer_object);

module.exports = {
    string_object: string_object,
    integer_object: integer_object
}