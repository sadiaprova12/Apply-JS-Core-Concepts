// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dataInches / 12;
// console.log('data feet', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches /12;
// console.log('dadiFeet', dadiFeet);

function inchToFeet(inches){
      const feet = inches / 12;
      return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);