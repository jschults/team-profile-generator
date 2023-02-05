const { default: expect } = require('expect'); // required dependencies to run test
const Employee = require('../lib/Employee');

test('creates an employee object', () => { // generates employee object 
    const employee = new Employee('Julian', 555, 'jschults00@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => { // acquires name from getName() 
    const employee = new Employee('', 555, 'jschults00@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => { // acquires id from getId() 
    const employee = new Employee('Julian', 555, 'jschults00@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => { // acquires emails from getEmail()
    const employee = new Employee('Julian', 555, 'jschults00@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => { // acquires role from getRole()
    const employee = new Employee('Julian', 555, 'jschults00@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 

