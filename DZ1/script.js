console.log('1 задание\n');
const arr = [1,5,7,9];
getMin = (array) => Math.min(...array);
console.log(arr);
console.log('Минимальное число из массива:'+ getMin(arr));
console.log('\n\n');
console.log('2 задание\n');

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
    }
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());

console.log('\n\n');
console.log('3 задание\n');
function factorial(num){
        if(num === 0) return 1;
        return factorial(num -1 )* num;
}
const number = Number(prompt('Введите любые числа'));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(number));
