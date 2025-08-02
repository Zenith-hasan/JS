let obj = {
    name :"Hasan",
    age : 22,
}

function greet(){
    console.log(this.age)
}

greet.call()