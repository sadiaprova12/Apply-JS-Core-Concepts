function factorial(numbers){
    let result = 1;
    for(let i = numbers; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

const numbers = 6;
const fact = factorial(numbers);
console.log('factorial of:' , numbers, fact);