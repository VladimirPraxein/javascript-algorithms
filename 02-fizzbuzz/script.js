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
    const arrayNum=[];
    for(let i=0;i<num;i++){
        arrayNum[i]=i+1;
    }
    for(let i=0;i<arrayNum.length;i++){
        if(arrayNum[i]%3===0 && arrayNum[i]%5===0){
            console.log('fizzbuzz');
        }
        else if(arrayNum[i]%3===0){
            console.log('fizz');
        }
        else if(arrayNum[i]%5===0){
            console.log('buzz');
        }
        else{
            console.log(arrayNum[i]);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);
