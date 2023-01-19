// ex 01

// var person = {
//   name: "Kim",
//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}.`);
//   }
// };

// console.log(typeof person);
// console.log(person);

// ex 02

// var empty = {};
// console.log(typeof empty);

// ex 04

// var person = {
//   firstName: "Naeun",
//   "last-name": "Kim"
// };

// console.log(person);

// ex 06

// var obj = {};
// var key = "hello";

// obj[key] = "world";

// console.log(obj);

// ex 07

// var foo = {
//   "": ""
// };

// console.log(foo);

// ex 08

// var foo = {
//   0: 1,
//   1: 2,
//   2: 3
// };

// console.log(foo);

// ex 09
// var foo = {
//   var: "",
//   function: ""
// };

// console.log(foo);

// ex 10
// var foo = {
//   name: "Kim",
//   name: "Lee"
// };

// console.log(foo);

// ex 11
// var circle = {
//   radius: 5,

//   getDiameter: function () {
//     return 2 * this.radius;
//   }
// };

// console.log(circle.getDiameter());

// ex 12
// var person = {
//   name: "Kim"
// };

// console.log(person.name);

// console.log(person["name"]);

// ex 13
// var person = {
//   name: "Kim"
// };

// console.log(person[name]);

// ex 14
// var person = {
//   name: "Kim"
// };

// console.log(person.age);

// ex 15
// var person = {
//   'last-name': 'Lee',
//   1: 10
// };

// person."last-name";
// person.last-name;

// person[last-name];
// person[`last-name`];

// person.1;
// person.'1';
// person[1];
// person[`1`];

// ex 16
// var person = {
//   name: "Kim"
// };

// person.name = "Lee";
// console.log(person);

// ex 17
// var person = {
//   name: "Kim"
// };

// person.age = 20;

// console.log(person);

// ex 18
// var person = {
//   name: "Kim"
// };

// person.age = 23;
// delete person.age;
// delete person.address;
// console.log(person);

// ex 19
// var x = 1,
//   y = 2;

// var obj = {
//   x: x,
//   y: y
// };

// console.log(obj);

// ex 20
// let x = 1,
//   y = 2;

// const obj = { x, y };
// console.log(obj);

// ex 21
// var prefix = "prop";
// var i = 0;

// var obj = {};

// obj[prefix + "-" + ++i] = i;
// obj[prefix + "-" + ++i] = i;
// obj[prefix + "-" + ++i] = i;

// console.log(obj);

// ex 22
// const perfix = "prop";
// let i = 0;

// const obj = {
//   [`$(prefix)-${++i}`]: i,
//   [`$(prefix)-${++i}`]: i,
//   [`$(prefix)-${++i}`]: i
// };

// console.log(obj);

// ex 23

// var obj = {
//   name: "Kim",
//   sayHi: function () {
//     console.log("Hi! " + this.name);
//   }
// };

// obj.sayHi();

// ex 24
// const obj = {
//   name: "Kim",
//   sayHi() {
//     console.log(`Hi! ` + this.name);
//   }
// };

// obj.sayHi();
