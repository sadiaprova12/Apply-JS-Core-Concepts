// 1 * 2 * 3 * 4 * 5 * 6 * 7
/** Factorial (1-4 porjontto multiplication bujhay)
 * 1.  3! = 3*2*1
 * 2.  4! = 4*3*2*1
 */
function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

const result = multiplicationOfNumbers(7);
console.log(result);