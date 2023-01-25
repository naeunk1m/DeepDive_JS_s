// ex 01
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
// const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
// o.a = 1;
// console.log(o);

// ex 04
// var str = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// console.log(str[0]);

// 원시 값인 문자열이 객체처럼 동작한다.
// console.log(str.length);
// console.log(str.toUpperCase());

// ex 05
// var str = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
// str[0] = "S";

// console.log(str);

// ex 06

// var score = 80;
// var copy = score;

// console.log(score);
// console.log(copy);

// score = 100;

// console.log(score);
// console.log(copy);

// ex 07

var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy);
console.log(score === copy);
