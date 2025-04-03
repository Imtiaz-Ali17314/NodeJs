// Classes in JS

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hello! I am ${this.name}`);
  }
}

let p1 = new Person("Ali", 12);
let p2 = new Person("hSSAN", 34);
