// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. 

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 75) + 1);
}

console.log("Массив:", arr);

let min = arr[0];
let max = arr[0];

// Проходим по массиву и находим минимальное и максимальное значения
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

let sum = min + max;

console.log(min);
console.log(max);
console.log(sum);