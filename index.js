'use strict'; // современный режим
// PART 1
// ============== Действие над массивом, объявленном внутри тега <script> ==============

console.log(insideTagArray.join(' '));
insideTagArray.pop();
console.log(insideTagArray.join(' '));

// ====================== X ======================

// ============== var, let, const ==============

// var + всплытие
console.log(varA);
var varA = 10;
console.log(varA);

// let: ERROR
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
const varC = 10;
// varC = 20; // error

// ====================== X ======================

// ============== массивы, объекты, строки ==============

// массивы + дебаггер
// test();

function test() {
    console.log('test');
    for (let i = 0; i < 5; i++) { // обычный цикл for
        console.log(`test + ${i}`);
    }
};

const arr1 = [5, 'Foo', true, null, undefined]; // литеральная инициализация массива
arr1[8] = 100;
arr1.forEach(item => {
    console.log(item);
});

// break, continue
// for .. in - перебор ключей (в случае массивов - индексов)
for (let key in arr1) {
    console.log(key);
}

// for .. of - перебор элементов
for (let key of arr1) {
    console.log(key);
}

// цикл while
let whileCounter = 0;
while (whileCounter < 4) {
    console.log(`while iteration ${whileCounter}`);
    whileCounter++;
}

// цикл do .. while
let doWhileCounter = 0;
do {
    console.log(`do while iteration ${doWhileCounter}`);
    doWhileCounter++;
} while (doWhileCounter < 4);

// строки
let stringExample = 'Hello, World!';
console.log(stringExample[3]);
console.log(stringExample.toUpperCase());
console.log(stringExample.toLowerCase());

// динамическая типизация
console.log(1 + '1');
console.log('1' + 1);
console.log(11 - '1');
console.log('11' - 1);

const age = '19';
console.log(typeof +age); // способ переведения строки в число

// объекты
const obj1 = { // литеральная инициализация объекта
    name: 'John',
    age: 19,
    interests: ['football', 'music', 'developing', 'video-editing'],
    sayHi: function () {
        console.log(`Hi, I'm ${this.name}`); // забегая наперед: контекст вызова this
        (() => {
            console.log(this);
        })();
    }
};

obj1.sayHi();
obj1.interests[0] = 'basketball';

for (let key in obj1) {
    console.log(obj1[key]); // обращение как к ассоциативному массиву
}

// PART 2
// ============== функции ==============

// function declaration, всплытие
funcDeclar();
function funcDeclar() {
    console.log('function declaration');
}

// function expression
const funcExpr = function() {
    console.log('function expression');
}

// arrow function expression
const arrowFuncExpr = () => {
    console.log('arrow function expression');
}

// именнованное функциональное выражение
const namedFuncExpr = function A() { // возможность рекурсивного вызова
    console.log('named function expression');
    // A();
}

let arr = [10, 12, 14];
arr.forEach((item) => { console.log(item) }); // анонимная функция

// аргументы в функциях, значения по умолчанию
let multiply = function(a, b) {
    a = a || 2;
    b = b || 4;
    return a * b;
}

console.log(multiply());
console.log(multiply(3, 2));

multiply = function(a = 2, b = 4) {
    return a * b;
}

console.log(multiply());
console.log(multiply(5, 10));

let anotherVar = multiply; // присваивается не указатель
anotherVar = 5;
console.log(multiply);
console.log(anotherVar);

let objOne = {
    name: 'John',
    age: 21
};

let anotherObj = objOne;
anotherObj.name = 'Michael';
console.log(objOne);
console.log(anotherObj);

// var undefined = 5; // пример для 'use strict'

// ES6+, новые стандарты
const array1 = [1, 2, 3];
const array2 = [10, 20, 30];
const resultArray = [...array1, ...array2]; // spread-оператор
console.log(resultArray);

function sumNumbers(...nums) { // rest-оператор
    return nums.reduce((prev, current) => prev + current);
}

console.log(sumNumbers(5, 6, 3, 4));
console.log(sumNumbers(7, 8));

const myObj = {
    objName: 'Danil',
    objAge: 19
};

const { objName, objAge } = myObj; // деструктуризация
console.log(objName, objAge);

const myArray = [4, 5, 6, 7, 8];

const [firstNum, secondNum, , , fifthNum] = myArray; // деструктуризация
console.log(firstNum, secondNum, fifthNum);

// PART 3
// несколько вариантов замыканий
// example 1
function multiplier(a) {
    return function(b) {
        return a * b;
    };
};

const multiplyByThree = multiplier(3);
console.log(multiplyByThree(5));
console.log(multiplyByThree(7));

// example 2
let foo = 10;
function simpleFunc() {
    return function() {
        return foo;
    };
};
const funcVar = simpleFunc();
console.log(funcVar());
foo = 20;
console.log(funcVar());

// example 3
function timesCalled() {
    let callCount = 0;
    return function() {
        console.log(`Function called ${++callCount} times`);
    }
}

const countOfCalls = timesCalled();
countOfCalls();
countOfCalls();
countOfCalls();
countOfCalls();

// example 4
const elements = [{}, {}, {}];
function personalCounters(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].counter = function() {
            return i;
        };
    }
}

personalCounters(elements);
console.log(elements[0].counter());
console.log(elements[1].counter());
console.log(elements[2].counter());

// IIFE, Module
const Counter = (function() {
    let privateCounter = 0; // private var

    function increaseBy(num) { // private function
        privateCounter += num;
    };
    
    return {
        increment: function() {
            privateCounter++;
        },
        decrement: function() {
            privateCounter--;
        },
        incBy: increaseBy,
        value: function() {
            return privateCounter;
        }
    }
})();

// console.log(privateCounter);
// increaseBy(5);

Counter.increment();
Counter.incBy(5);
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());

// Обработчик события, замыкание + анонимная функция
const div = document.querySelector('div');

function addOnClick(element) {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
};

addOnClick(div);