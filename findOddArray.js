function getOddNumbersArray(numbers){
    // declare array
    const oddNumbers = [];
     for(let i = 0; i < numbers.length; i++){
        // console.log(i);
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        
     }
     return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersArray(myNumbers);
// console.log(oddNumbers);
const myNumberIsOdd = getOddNumbersArray(oddNumbers);

console.log('odd number sum', oddNumbers);