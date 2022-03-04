/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    // Напишите код здесь
    const arrayNumbers = [];
    for (let i = 0; i < num; i++) {
        arrayNumbers[i] = i + 1;
    }
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if (arrayNumbers[i] % 3 === 0) {
            console.log('fizz');
        }
        else if (arrayNumbers[i] % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(arrayNumbers[i]);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);
