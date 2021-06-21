"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Person = void 0;
const calculator_1 = require("./calculator");
class Person {
    constructor() {
        this.firstName = '';
        this.lastName = '';
    }
}
exports.Person = Person;
class Employee extends Person {
    constructor() {
        super(...arguments);
        this.title = '';
    }
}
exports.Employee = Employee;
var p = new Person();
p.firstName = 'John';
p.lastName = 'Lennon';
let c = new calculator_1.Calculator();
//# sourceMappingURL=main.js.map