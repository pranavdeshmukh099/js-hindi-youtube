// singleton

//object literals
const mySym=Symbol("Key1")
const Jsuer={
    name:"Pranav",
    age:22,
    [mySym]:"myKey1",
    roll_NO:21,
    mobile_no:9420527417,
    address:"Indiranagar Lane No 2",
    email:"pranavdeshmukh099@gmail.com",
    isLoggedIn:false,
    lastLogin:["monday","saturday"]
}

// console.log(Jsuer.email)
// console.log(Jsuer["email"])
// console.log(Jsuer["age"])
// console.log(Jsuer[mySym])

// Jsuer.email="pranav@chatgpt.com"
// Object.freeze(Jsuer)
// console.log(Jsuer)


Jsuer.greting=function(){
    console.log("Hello Js User");
}



Jsuer.gretingTwo=function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(Jsuer.greting());
console.log(Jsuer.gretingTwo());
