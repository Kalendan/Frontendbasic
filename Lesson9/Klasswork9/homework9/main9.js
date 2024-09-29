


// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. 
//(НЕ используем Math.min / max) Вывести в консоль.

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}

console.log( arr);

let min = arr[0];
let max = arr[0];

//  минимальное и максимальное значения
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log( min);
console.log( max);