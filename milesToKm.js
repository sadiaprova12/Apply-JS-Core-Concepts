function milesTokilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const train = 144;
const road = milesTokilometer(train);
console.log(road);