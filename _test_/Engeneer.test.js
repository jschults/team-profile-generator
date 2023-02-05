const Engineer = require('../lib/Engineer'); // connects Engineer constructor
const { default: expect } = require('expect');
  
test('Generates an Engineer object', () => { // generates Engineer object to run test
    const engineer = new Engineer('Julian', 444, 'jschults00@gmail.com', 'jschults');
    expect(engineer.GitHub).toEqual(expect.any(String));
});

test('Acquires engineer github value', () => { // Acquires github from getGithub() to run test
    const engineer = new Engineer('Julian', 444, 'jschults00@gmail.com', 'jschults');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.GitHub.toString()));
});

test('Acquires role of employee', () => {  // Acquires role from getRole() to run test
    const engineer = new Engineer('Julian', 444, 'jschults00@gmail.com', 'jschults');
    expect(engineer.getRole()).toEqual("Engineer");
})