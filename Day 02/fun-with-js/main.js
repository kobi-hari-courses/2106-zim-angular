function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.nationality = 'Israeli';

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}
Person.prototype.log = function() {
    console.log('Hi, I am a person, and my name is: ' + this.getFullName());
}

var p1 = new Person('John', 'Lennon');
var p2 = new Person('Paul', 'McCartney');
//var p3 = Person('Ringo', 'Starr');


console.log(p1);
console.log(p2);
// console.log(p3);

p1.log();

setTimeout(p1.log.bind(p2), 2000);