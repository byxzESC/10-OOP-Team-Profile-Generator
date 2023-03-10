const Engineer = require('../lib/Engineer');

    // new Engineer(name, id, email, github);

describe('Engineer', () => {
    it('Can set GitHub account via constructor', () => {
        const bob = new Engineer('bob', '1', 'bob@bc.com', 'github.com/bob');
        const expected = 'github.com/bob';
        expect(bob.github).toBe(expected);
    });
    it('getRole() should return "Engineer"', () => {
        const bob = new Engineer('bob', '1', 'bob@bc.com', 'github.com/bob');
        const expected = 'Engineer';
        expect(bob.getRole()).toBe(expected);
    });
    it('Can get GitHub username via getGithub()', () => {
        const bob = new Engineer('bob', '1', 'bob@bc.com', 'github.com/bob');
        const expected = 'github.com/bob';
        expect(bob.getGithub()).toBe(expected);
    });
})