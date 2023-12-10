/** even number */
// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);


/** Remainder even number */
// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

/** odd number */
// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

/** Remainder odd number */
// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}

// isEven(48);
// isEven(35);
// isEven(1280);

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const myNumberIsOdd = isEven(1280);
console.log(myNumberIsOdd);
