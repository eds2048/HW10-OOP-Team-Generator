
// Engineer extends Employee
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github, getGithub,getRole) {

        super(github, getGithub, getRole);

        this.github = this.github;
        this.getGithub(){
            console.log(getGithub);
        }

        this.getRole() {
            return Engineer;

        }

    }
}
