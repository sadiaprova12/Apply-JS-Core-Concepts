function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return result;
}

const num = factorial(7);
console.log(num);