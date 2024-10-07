
//zadanije1
function result(num) {

    let a = Math.floor(num);
    
    if (a % 2 === 0) {
        return 'even';  
    } else {
        return 'odd';  
    }
}

console.log(result(2));    
console.log(result(7.8));  


//zadanije 2
const square = (num) => {

    let a = Math.floor(num);
    return a * a;
};
console.log(square(4));    
console.log(square(7.8));  
console.log(square(-2.5)); 

//zadanije 3
const sumEvenNumbers = (start, end) => {
   
    let roundedStart = Math.floor(start);
    let roundedEnd = Math.floor(end);
    
    let sum = 0;

    for (let i = roundedStart; i <= roundedEnd; i++) {
     if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
};
console.log(sumEvenNumbers(1, 10));    
console.log(sumEvenNumbers(3.8, 7.2)); 
console.log(sumEvenNumbers(-5, 5));   


//zadanine 4
const isSimple = (num) => {
    if (num < 2) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  
        }
    }
    return true;
};

const findSimpleInRange = (n) => {
    let simple = [];
    for (let i = 1; i <= n; i++) {
        if (isSimple(i)) {
            simple.push(i);  // Если число простое, добавляем его в массив
        }
    }
    return simple;
};

