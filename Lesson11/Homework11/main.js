//zadanije 1:
function arrayToObject(arr) {
    const result = {};
    
    arr.forEach(item => {
      // Преобразуем каждый элемент в строку для использования в качестве ключа
      result[item.toString()] = item;
    });
  
    return result;
  }
  
  // Пример использования
  const input = ['a', 36.6, 'John Doe'];
  const output = arrayToObject(input);
  console.log(output); // { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

  //zadanija2:
  function arrayPairsToObject(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

// Пример использования
const input = [
  ['height', 170],
  ['weight', 80],
  ['sport', 'regbi'],
  ['full name', 'John Doe'],
  ['sing', 'love'],
  ['speed', 90]
];

const output = arrayPairsToObject(input);
console.log(output);

//zadanije 3
function objectValuesToString(obj) {
  return Object.values(obj).join(', ');
}

// Пример использования
const input = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const output = objectValuesToString(input);
console.log(output); // 'a, 36.6, John Doe'

//zadanije4
function convertValuesToTypes(obj) {
  // Создаем новый объект, в который будем записывать типы
  const result = {};

  // Проходим по каждому ключу исходного объекта
  for (let key in obj) {
    // Проверяем, что это собственное свойство, а не прототип
    if (obj.hasOwnProperty(key)) {
      // Записываем тип значения свойства в новый объект
      result[key] = typeof obj[key];
    }
  }

  return result;
}

// Пример использования
const input = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const output = convertValuesToTypes(input);

console.log(output);
// { a: 'string', '36.6': 'number', 'John Doe': 'string' }