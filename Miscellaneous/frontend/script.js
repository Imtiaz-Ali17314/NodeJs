// Factory Function

function PersonMaker(name, age) {
  person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello! I am ${this.name}`);
    },
  };

  return person;
}

p1 = PersonMaker("ALi", 23);
p2 = PersonMaker("kamal", 12);
p3 = PersonMaker("hassan", 34);
p4 = PersonMaker("akbar", 63);
