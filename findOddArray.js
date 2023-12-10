function getOddNumbersArray(numbers){
     for(let i = 0; i < numbers.length; i++){
        // console.log(i);
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
        }
        
     }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbersArray(myNumbers);