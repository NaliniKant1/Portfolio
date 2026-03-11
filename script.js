const text=["Electronics Engineer","Web Developer","Programmer"]

let i=0
let j=0
let deleting=false

function type(){

let current=text[i]

if(!deleting){

document.getElementById("typing").textContent=current.substring(0,j++)

if(j>current.length){

deleting=true
setTimeout(type,1000)
return
}

}

else{

document.getElementById("typing").textContent=current.substring(0,j--)

if(j==0){

deleting=false
i++

if(i==text.length)
i=0

}

}

setTimeout(type,100)

}

type()
