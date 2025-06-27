//array

const myArray = [0,1,2,3,4,5]
const myHeros=["shaktiman","ironMan"]

const myArray2=new Array(1,2,3,4,5)
// myArray.push(6)
// myArray.pop()
// myArray.unshift(9)
// myArray.shift()



// console.log(myArray.indexOf(3))
// console.log(myHeros)
// console.log(myArray2)

const newArray=myArray.join()
console.log(newArray)  //type is string

console.log("A",myArray)

const myn1=myArray.slice(1,3)

console.log(myn1);

console.log("B",myArray)

const myn2=myArray.splice(1,3)

console.log(myn2);

console.log("C",myArray)
