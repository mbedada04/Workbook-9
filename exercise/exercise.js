class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.emplyeeid = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
  getIntro() {
    return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee(1, "Millena", "Bedada", "software Dev", 1000000);

//console.log(employee.getFullName());

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
let intro = employee1.getIntro();
console.log(intro);
