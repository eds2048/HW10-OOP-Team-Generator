
// Intern extends Employee
const Employee = require("./employee");

class Intern extends Employee {
    constructor(school, getSchool, getRole) {

        super(school, getSchool, getRole);

        this.school = this.school;
        this.getSchool(){
            console.log(getSchool);
        }

        this.getRole() {
            return Intern;
        }

    }
}
