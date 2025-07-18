const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const greet = person.greet;
greet();
