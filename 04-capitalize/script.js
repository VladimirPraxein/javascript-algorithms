/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    const arrayLetters = str.split(' ');
    for (let i = 0; i < arrayLetters.length; i++) {
        arrayLetters[i] = arrayLetters[i].slice(0, 1).toUpperCase() + arrayLetters[i].slice(1);
    }
    return str = arrayLetters.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"