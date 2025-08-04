setTimeout(function (){
    console.log("Hello")
},3000)
 

let timer = setInterval(function(){
    console.log("Hi")
},2000)

clearInterval(timer)