const name="Pranav"
const repoCount=50
//console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('pranavfc deshmukh');

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString=gameName.slice(-6,6);
console.log(anotherString);

const newStringOne="     Pranav    ";
console.log(newStringOne.trim());

const url="https://pranav.com/pranav%20deshmukh"
console.log(url.replace('%20','-'));
console.log(url.includes('pranav'));

console.log(gameName.split("-"));