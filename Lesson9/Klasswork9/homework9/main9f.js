// массив
let arr = [1, 2, 3, 4, 5];

// Функция для переворота массива
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Переворачивание массива
let reversedArr = reverseArray(arr);

console.log("Исходный массив:", arr);
console.log("Перевернутый массив:", reversedArr)