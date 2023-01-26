// ex 01

// f(x, y) = x + y
// function add(x, y) {
//   return x + y;
// }

// f(2, 5) = 7
// add(2, 5); // 7

// ex 02

// function add(x, y) {
//   return x + y;
// }

// ex 03
// 함수 호출
// var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
// console.log(result);

// ex 05

// 함수 선언문
// function add(x, y) {
//   return x + y;
// }

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.

// console.dir(add); // f add(x, y)

// 함수 호출
// console.log(add(2, 5));

// ex 06

// 함수 선언문은 함수 이름을 생략할 수 없다.
// function (x, y) {
//   return x + y;
// }

// SyntaxError: Function statements require a function name

// ex 07

// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
// var add = function add(x, y) {
//   return x + y;
// };

// 함수 호출
// console.log(add(2, 5));

// ex 08

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.

// function foo() {
//   console.log("foo");
// }
// foo();

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.

// (function bar() {
//   console.log("bar");
// });
// bar(); // ReferenceError: bar is not defined

// ex 09

// var add = function add(x, y) {
//   return x + y;
// };

// console.log(add(2, 5));

//ex 10

// 함수 표현식
// var add = function (x, y) {
//   return x + y;
// };

// console.log(add(2, 5));

// ex 11

// 기명 함수 표현식
// var add = function foo(x, y) {
//   return x + y;
// };

// 함수 객체를 가리키는 식별자로 호출
// console.log(add(2, 5));

// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
// console.log(foo(2, 5)); // ReferenceError: foo is not defined

// ex 12

// 함수 참조
// console.dir(add);
// console.dir(sub);

// 함수 호출
// console.log(add(2, 5));
// console.log(sub(2, 5));

// 함수 선언문
// function add(x, y) {
//   return x + y;
// }

// 함수 표현식
// var sub = function (x, y) {
//   return x - y;
// };

// ex 13

// var add = new Function("x", "y", "return x + y");

// console.log(add(2, 5));

// ex 14

// var add1 = (function () {
//   var a = 10;
//   return function (x, y) {
//     return x + y + a;
//   };
// })();

// console.log(add1(1, 2));

// var add2 = (function () {
//   var a = 10;
//   return new Function("x", "y", "return x + y + a;");
// })();

// console.log(add2(1, 2));

// ex 15

// const add = (x, y) => x + y;
// console.log(add(2, 5));

// ex 16

// 함수 선언문
// function add(x, y) {
//   return x + y;
// }

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
// var result = add(1, 2);

// ex 17

// function add(x, y) {
//   console.log(x, y);
//   return x + y;
// }

// add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y);

// ex 18

// function add(x, y) {
//   return x + y;
// }

// console.log(add(2));

// ex 20

// function add(x, y) {
//   console.log(arguments);
// Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]

//   return x + y;
// }

// add(2, 5, 10);

// ex 22

// function add(x, y) {
//   return x + y;
// }

// console.log(add(2));
// console.log(add("a", "b"));

// ex 23

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
// 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
//     throw new TypeError("인수는 모두 숫자 값이어야 합니다. ");
//   }
//   return x + y;
// }

// console.log(add(2));
// console.log(add("a", "b"));

// ex 24

// function add(a, b, c) {
//   a = a || 0;
//   b = b || 0;
//   c = c || 0;
//   return a + b + c;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add(1));
// console.log(add());

// ex 25

// function add(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add(1));
// console.log(add());

// ex 26

// $.ajax({
//   method: "POST",
//   url: "/user",
//   data: { id: 1, name: "Lee" },
//   cache: false
// });

// ex 27

// function multiply(x, y) {
//   return x * y; // 반환문
// }

// 함수 호출은 반환값으로 평가된다.
// var result = multiply(3, 5);
// console.log(result);

// ex 28
// function multiply(x, y) {
//   return x * y; // 반환문
// 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
//   console.log("실행되지 않는다.");
// }

// console.log(multiply(3, 5));

// ex 29
// function foo() {
//   return;
// }

// console.log(foo()); // undefined

// ex 30
// function foo() {
// 반환문을 생략하면 암묵적으로 undefined가 반환된다.
// }

// console.log(foo());
