const a = 17;
const b = 5;

console.log('a > b is ' + (a > b));               // true
console.log('a <= b is ' + (a <= b));             // false
console.log('a == b is ' + (a == b));             // false
console.log('a != b is ' + (a != b));             // true

console.log("'a' < 'b' is " + ('a' < 'b'));       // true
console.log("'ab' > 'a' is " + ('ab' > 'a'));     // true

console.log("'17' > 1 is " + ('17' > 1));         // true (строка '17' преобразуется в число)

console.log('17 === 1 is ' + (17 === 1));         // false
console.log('17 === 17 is ' + (17 === 17));       // true
console.log('17 === \'17\' is ' + (17 === '17')); // false (разные типы: число и строка)
console.log('17 === true is ' + (17 === true));   // false
console.log("'0' === '' is " + ('0' === ''));     // false (разные строки)
console.log('true === false is ' + (true === false)); // false
console.log('true === true is ' + (true === true));   // true
console.log('null === undefined is ' + (null === undefined)); // false (разные типы)
console.log('false === 0 is ' + (false === 0));   // false (разные типы)

console.log('17 == \'17\' is ' + (17 == '17'));   // true (нестрогое равенство)
console.log("'0' == '' is " + ('0' == ''));       // false (сравниваются разные значения)
console.log('0 == \'\' is ' + (0 == ''));         // true (пустая строка приводится к 0)
console.log('null == undefined is ' + (null == undefined)); // true (они равны при нестрогом сравнении)
console.log('false == 0 is ' + (false == 0));     // true (false приводится к 0)

console.log('undefined == null is ' + (undefined == null)); // true
console.log('undefined == 0 is ' + (undefined == 0));       // false (undefined не приводится к числу)
console.log('null == 0 is ' + (null == 0));                 // false (null не приводится к числу)
console.log('undefined < 0 is ' + (undefined < 0));         // false (undefined не является числом)
console.log('undefined > 0 is ' + (undefined > 0));         // false (undefined не является числом)