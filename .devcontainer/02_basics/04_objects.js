const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

const course ={
    corusename:"js in hindi",
    price:"999",
    coruseInstructor:"pranav"
}

const {coruseInstructor:instructor}=course
console.log(instructor)

