function syMyName(){
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
}

syMyName

function addTwoNumbers(number1, number2){
    let result=number1+number2
    return result
}

const result=addTwoNumbers(3,5)
//console.log("reuslt",result);


function loginuserMessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginuserMessage())


function calculateCarPrice(...num1){

    return num1
}

//console.log(calculateCarPrice(200,300,400))

const user={
    username:"Pranav",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and object price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"Sam",
    price:8965
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))