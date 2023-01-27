const Employee = require('../lib/Employee');

    // new Employee(name, id, email)
describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');

        expect(bob instanceof Employee).toBe(true);
    });

    it('can set name via constructor arguments', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = 'bob';
        expect(bob.name).toBe(expected);
    });
    it('can set id via constructor arguments', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = '1';
        expect(bob.id).toBe(expected);
    });
    it('can set email via constructor arguments', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = 'bob@bc.com';
        expect(bob.email).toBe(expected);
    });
    it('can get name via constructor getName()', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = 'bob';
        expect(bob.getName()).toBe(expected);
    });
    it('can get id via constructor getId()', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = '1';
        expect(bob.getId()).toBe(expected);
    });
    it('can get name via constructor getEmail()', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = 'bob@bc.com';
        expect(bob.getEmail()).toBe(expected);
    });
    it('getRole() should return "Employee"', () => {
        const bob = new Employee('bob', '1', 'bob@bc.com');
        const expected = 'Employee';
        expect(bob.getRole()).toBe(expected);
    });
})