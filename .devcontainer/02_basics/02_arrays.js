const marval_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marval_heros.push(dc_heros)

// console.log(marval_heros)
// console.log(marval_heros[3][1])

// const allHeros=marval_heros.concat(dc_heros)

// console.log(allHeros)

const newHeros=[...marval_heros,...dc_heros]
console.log(newHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[8,9]]]

const realArray=anotherArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("Pranav"))
console.log(Array.from("Pranav"))

let score1=100,score2=200,score3=300
console.log(Array.of(score1,score2,score3))