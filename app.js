// var num2 = 5;

// var sum = function () {
//   var num1 = 9;
//   return function () {
//     return num1 + num2;
//   };
// };

// var myFunc = sum();
// console.dir(myFunc);

// function bankAccount(intialBalance) {
//   var balance = intialBalance;
//   return function () {
//     return balance;
//   };
// }

// var bank = bankAccount(10000);
// console.log(bank());

// (function () {
//   var num1 = 1;
//   var num2 = 3;

//   function sum() {
//     return num1 + num2;
//   }

//   console.log(sum());
//   console.dir(sum);

//   num1 = 5;
//   num2 = 55;

//   console.log(sum());
//   console.dir(sum);
// })();

// function stopWatch() {
//   var startTime = Date.now();

//   function getDealy() {
//     console.log(Date.now() - startTime);
//   }
//   return getDealy;
// }

// var timer = stopWatch();

// for (let i = 0; i < 100000000; i++) {
//   var a = Math.random() * 100000000;
// }

// timer();
// timer = null;

// timer();

// var a;

// function async() {
//   a = 20;

//   var myFunc = () => {
//     console.log(a);
//   };

//   setTimeout(myFunc, 7000);
//   console.dir(myFunc);
// }

// async();

// a = 50;

for (let i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log(`after for loop`);
