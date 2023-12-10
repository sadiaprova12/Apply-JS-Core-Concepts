// What is Leap Year//

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
console.log(notLeapYear);
const leapYear = isLeapYear(1960);
console.log(leapYear);