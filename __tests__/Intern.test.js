const Intern = require('../lib/Intern');

    // new Intern(name, id, email, school);

describe('Intern', () => {
    it('Can set school via constructor', () => {
        const bob = new Intern('bob', '1', 'bob@bc.com', 'UCC');
        const expected = 'UCC';
        expect(bob.school).toBe(expected);
    });
    it('getRole() should return "Intern"', () => {
        const bob = new Intern('bob', '1', 'bob@bc.com', 'UCC');
        const expected = 'Intern';
        expect(bob.getRole()).toBe(expected);
    });
    it('Can get school via getSchool()', () => {
        const bob = new Intern('bob', '1', 'bob@bc.com', 'UCC');
        const expected = 'UCC';
        expect(bob.getSchool()).toBe(expected);
    });
})