const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));


const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE);

//+++++++++++++++++++++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math);

console.log(Math.abs(-4));  //negative converted into positive
console.log(Math.round(4.654));
console.log(Math.ceil(4.678));
console.log(Math.floor(4.356));
console.log(Math.sqrt(64));
console.log(Math.max(7,5));

console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max - min + 1)+min))