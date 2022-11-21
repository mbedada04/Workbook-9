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
}

let employee = new Employee("Programmer", "Millena", 2, "App Dev", 2000000);
console.log(employee.getFullName());
