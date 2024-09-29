const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstElement = b.shift(); 
b.push(firstElement);
console.log(b); 


for (let i = 0; i < b.length; i++) {
    console.log(b[i])
};

const arrC = [];
for (let i = 5; i <= 9; i++) {
    arrC.push(i);
}
console.log(arrC);


let i = 5;

while (i <= 9) {
    arrC.push(i);
    i++; // Увеличиваем значение i
}

console.log(arrC); // [5, 6, 7, 8, 9]


let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let arr = [];  
  for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 11));  // Генерируем случайное число от 0 до 10 и добавляем в массив
}
console.log(arr);  // Выводим массив

