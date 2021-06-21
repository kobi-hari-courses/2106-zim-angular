import { Calculator } from "./calculator";

export class Person {
    firstName: string = '';
    lastName: string = '';
}

export class Employee extends Person {
    title: string = '';
}

var p = new Person();
p.firstName = 'John';
p.lastName = 'Lennon';

let c = new Calculator();