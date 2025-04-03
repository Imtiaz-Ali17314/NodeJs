// New operator

// Constructor ---> Doesn't retrun anything and start with Capital

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hi! I am ${this.name}`);
};

let p1 = new Person("Ali", 12);
let p2 = new Person("hSSAN", 34);
