// function syMyName(){
//     console.log("p");
//     console.log("p");
//     console.log("p");
//     console.log("p");
//     console.log("p");
//     console.log("p");
// }

// syMyName

// function addTwoNumbers(number1, number2){
//     let result=number1+number2
//     return result
// }

// const result=addTwoNumbers(3,5)
// //console.log("reuslt",result);


// function loginuserMessage(username="sam"){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// //console.log(loginuserMessage())


// function calculateCarPrice(...num1){

//     return num1
// }

// //console.log(calculateCarPrice(200,300,400))

// const user={
//     username:"Pranav",
//     price:99
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and object price is ${anyobject.price}`);
// }

// //handleObject(user)

// handleObject({
//     username:"Sam",
//     price:8965
// })

// const myNewArray=[200,400,100,600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray))





function myName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// myName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result;

    return num1+num2;
}

const result = addTwoNumbers(3,5);
console.log("Result :", result)



function loginUserMessage(username="sam"){
    if(username===undefined)
    {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pranav"))

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500)


const user={
    username:"Pranav",
    price:199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username:"SAM",
    price:399
})


const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))