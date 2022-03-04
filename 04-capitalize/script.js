/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    const strArray=str.split(' ');
    for(let i=0;i<strArray.length;i++){
        strArray[i]=strArray[i].slice(0,1).toUpperCase()+strArray[i].slice(1);
    }
    return str=strArray.join(' ');  
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"