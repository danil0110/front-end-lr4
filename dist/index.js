'use strict'; // современный режим
// PART 1
// ============== Действие над массивом, объявленном внутри тега <script> ==============

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(insideTagArray.join(' '));
insideTagArray.pop();
console.log(insideTagArray.join(' ')); // ====================== X ======================
// ============== var, let, const ==============
// var + всплытие

console.log(varA);
var varA = 10;
console.log(varA); // let: ERROR
// console.log(varB);
// let varB = 10;
// console.log(varB);
// {
//     let varB = 20;
//     console.log(varB);
// }
// console.log(varB);
// const
// const varC; // error

var varC = 10; // varC = 20; // error
// ====================== X ======================
// ============== массивы, объекты, строки ==============
// массивы + дебаггер
// test();

function test() {
  console.log('test');

  for (var i = 0; i < 5; i++) {
    // обычный цикл for
    console.log("test + ".concat(i));
  }
}

;
var arr1 = [5, 'Foo', true, null, undefined]; // литеральная инициализация массива

arr1[8] = 100;
arr1.forEach(function (item) {
  console.log(item);
}); // break, continue
// for .. in - перебор ключей (в случае массивов - индексов)

for (var key in arr1) {
  console.log(key);
} // for .. of - перебор элементов


for (var _i = 0, _arr = arr1; _i < _arr.length; _i++) {
  var _key = _arr[_i];
  console.log(_key);
} // цикл while


var whileCounter = 0;

while (whileCounter < 4) {
  console.log("while iteration ".concat(whileCounter));
  whileCounter++;
} // цикл do .. while


var doWhileCounter = 0;

do {
  console.log("do while iteration ".concat(doWhileCounter));
  doWhileCounter++;
} while (doWhileCounter < 4); // строки


var stringExample = 'Hello, World!';
console.log(stringExample[3]);
console.log(stringExample.toUpperCase());
console.log(stringExample.toLowerCase()); // динамическая типизация

console.log(1 + '1');
console.log('1' + 1);
console.log(11 - '1');
console.log('11' - 1);
var age = '19';
console.log(_typeof(+age)); // способ переведения строки в число
// объекты

var obj1 = {
  // литеральная инициализация объекта
  name: 'John',
  age: 19,
  interests: ['football', 'music', 'developing', 'video-editing'],
  sayHi: function sayHi() {
    var _this = this;

    console.log("Hi, I'm ".concat(this.name)); // забегая наперед: контекст вызова this

    (function () {
      console.log(_this);
    })();
  }
};
obj1.sayHi();
obj1.interests[0] = 'basketball';

for (var _key2 in obj1) {
  console.log(obj1[_key2]); // обращение как к ассоциативному массиву
} // PART 2
// ============== функции ==============
// function declaration, всплытие


funcDeclar();

function funcDeclar() {
  console.log('function declaration');
} // function expression


var funcExpr = function funcExpr() {
  console.log('function expression');
}; // arrow function expression


var arrowFuncExpr = function arrowFuncExpr() {
  console.log('arrow function expression');
}; // именнованное функциональное выражение


var namedFuncExpr = function A() {
  // возможность рекурсивного вызова
  console.log('named function expression'); // A();
};

var arr = [10, 12, 14];
arr.forEach(function (item) {
  console.log(item);
}); // анонимная функция
// аргументы в функциях, значения по умолчанию

var multiply = function multiply(a, b) {
  a = a || 2;
  b = b || 4;
  return a * b;
};

console.log(multiply());
console.log(multiply(3, 2));

multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a * b;
};

console.log(multiply());
console.log(multiply(5, 10));
var anotherVar = multiply; // присваивается не указатель

anotherVar = 5;
console.log(multiply);
console.log(anotherVar);
var objOne = {
  name: 'John',
  age: 21
};
var anotherObj = objOne;
anotherObj.name = 'Michael';
console.log(objOne);
console.log(anotherObj); // var undefined = 5; // пример для 'use strict'
// ES6+, новые стандарты

var array1 = [1, 2, 3];
var array2 = [10, 20, 30];
var resultArray = [].concat(array1, array2); // spread-оператор

console.log(resultArray);

function sumNumbers() {
  for (var _len = arguments.length, nums = new Array(_len), _key3 = 0; _key3 < _len; _key3++) {
    nums[_key3] = arguments[_key3];
  }

  // rest-оператор
  return nums.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(sumNumbers(5, 6, 3, 4));
console.log(sumNumbers(7, 8));
var myObj = {
  objName: 'Danil',
  objAge: 19
};
var objName = myObj.objName,
    objAge = myObj.objAge; // деструктуризация

console.log(objName, objAge);
var myArray = [4, 5, 6, 7, 8];
var firstNum = myArray[0],
    secondNum = myArray[1],
    fifthNum = myArray[4]; // деструктуризация

console.log(firstNum, secondNum, fifthNum); // PART 3