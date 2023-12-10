// What is Leap Year//
// javascript lepar logic google search

// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         // console.log('Year year is leap year', year);
//         return true;
//     }
//     else{
//         // console.log('Your year is not a leap year', year);
//         return false;
//     }
// }

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Year year is leap year', year);
        return true;
    }
    else{
        // console.log('Your year is not a leap year', year);
        return false;
    }
}

const notLeapYear = isLeapYear(1933);
console.log('my year:', notLeapYear);
const leapYear = isLeapYear(1960);
console.log('her year:', leapYear);