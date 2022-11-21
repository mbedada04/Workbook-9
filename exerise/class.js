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
}

let employee = new Employee(1, "Millena", "Bedada", "software Dev", 1000000);

console.log(employee.getFullName());
