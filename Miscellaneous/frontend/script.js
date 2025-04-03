// Inheritance in Classes

// Parent class ---- Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi! I am ${this.name}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

// Child class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let stu1 = new Student("Rasib", 11, 90);
let teach1 = new Teacher("Kamil", 43, "Urdu");
