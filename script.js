const words = ["Electronics Engineer","Web Developer","VLSI Enthusiast"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1500);

return;

}

}

else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(type,100);

}

type();
