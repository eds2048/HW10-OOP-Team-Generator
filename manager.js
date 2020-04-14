
// Manager extends Employee
const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber,getRole){

        super(officeNumber,getRole);
        
        this.officeNumber = this.officeNumber;
        this.getRole() {
        return Manager;
        
        }
        
    }
}
