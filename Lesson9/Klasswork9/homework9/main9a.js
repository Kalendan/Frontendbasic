// Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.

let arr = [5, 12, 8, 130, 44, 17, 3, 99, 24, 61];
console.log("Исходный массив:", arr);
let firstElement = arr.shift();
// Добавляем 
arr.push(firstElement);

console.log("Измененный массив:", arr);