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