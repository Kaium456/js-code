// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} was eating`);
//   }
// }

// class Cricketer extends Person {
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }
//   play() {
//     console.log(`${this.name} was playing`);
//   }
// }

// let sakib = new Cricketer("sakib", 35, "All Rounder", "Bangladesh");

// let tamim = new Person("tamim", 36);

// console.log(tamim);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} was eating`);
  }
  static me() {
    return `${this.name}`;
  }
}

const sakib = new Person("sakib", 35);

console.log(Person.me());
