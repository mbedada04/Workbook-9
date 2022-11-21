class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person = new Person("Millena", "Bedada");
console.log(person.getFullName());

class Employee extends Person {
  constructor(firstName, lastName, id, jobTitle, payRate) {
    super(firstName, lastName);
    this.id = id;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
  getPayStub(){
    return`Employee Name: ${this.getFullName()}
    job Title: ${this.jobTitle}
    Weekly Pay: ${this.payRate * 50}`
  }
}

let employee = new Employee("Programmer", "goddess", 2, "App Dev", 2000000);
console.log(employee.getFullName());
console.log(employee.getPayStub());
