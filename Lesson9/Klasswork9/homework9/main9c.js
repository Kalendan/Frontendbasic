// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. 
//Найти сумму всех элементов массива.Вывести в консоль.

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1);
}

console.log("Массив:", arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

