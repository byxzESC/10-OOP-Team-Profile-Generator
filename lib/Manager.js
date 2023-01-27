const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice = () => this.officeNumber;
    getRole = () => 'Manager';
}

module.exports = Manager;