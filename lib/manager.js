const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumb) {
        super(name, id, email);
        this.officeNumb = officeNumb;
    }
    getofficeNumb() {
        return this.officeNumb;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager; 