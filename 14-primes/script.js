/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    // Напишите код здесь
    const arr=[];
    
    for(let i=2;i<=num;i++){
        arr.push(i);
    }
    const arrPrime=arr.filter(function(item){
        let isPrime=true;
        for(let i=2;i<item;i++){
            if(item%i===0){
                isPrime=false;
            }
        }
        return isPrime;
    });
    return arrPrime;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]