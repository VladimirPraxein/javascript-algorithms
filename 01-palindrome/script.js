/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    // Напишите код здесь
    const arrayPunctuation = ['.', ',', ';', ':', '?', '!', '-', '[', ']', '(', ')', '<<', '>>', ' '];
    const arrayLetters = str.split('');
    for (let i = 0; i < arrayPunctuation.length; i++) {
        for (let j = 0; j < arrayLetters.length; j++) {
            if (arrayLetters[j] === arrayPunctuation[i]) {
                arrayLetters.splice(j, 1);
            }
        }
    };
    str = arrayLetters.join('');
    if (str.toLowerCase() === arrayLetters.reverse().join('').toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/