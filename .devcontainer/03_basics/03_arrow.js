const user={
    username :"Pranav",
    price : 9999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
    }


}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let usernae="Pranav"
//     console.log(this.username)
// }

// chai()

// const chai=function(){
//     let username="Pranav"
//     console.log(this.username)
// }


const chai=() => {
    let username="Pranav"
    console.log(this)
}

// chai()

// const addTwo=(num1, num2)=> num1+num2

const addTwo = (num1, num2)=> ({usernae :"Pranav"})


console.log(addTwo(3,4))


