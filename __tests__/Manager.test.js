const Manager = require('../lib/Manager');

    // new Manager(name, id, email, officeNumber);

describe('Manager', () => {
    it('Can set office number via constructor', () => {
        const bob = new Manager('bob', '1', 'bob@bc.com', '88');
        const expected = '88';
        expect(bob.officeNumber).toBe(expected);
    });
    it('getRole() should return "Manager"', () => {
        const bob = new Manager('bob', '1', 'bob@bc.com', '88');
        const expected = 'Manager';
        expect(bob.getRole()).toBe(expected);
    });
    it('Can get office number via getOffice()', () => {
        const bob = new Manager('bob', '1', 'bob@bc.com', '88');
        const expected = '88';
        expect(bob.getOffice()).toBe(expected);
    });
})