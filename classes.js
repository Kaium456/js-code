function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

let sakib = new Cricketer("sakib", 35, "All Rounder", "Bangladesh");

console.log(sakib);
