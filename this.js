// implicit binding
// explicit binding
// new binding
// window binding

var sakib = {
  name: "sakib",
  age: 35,
  printPlayerName: function () {
    console.log(this.name);
  },
};

sakib.printPlayerName();
