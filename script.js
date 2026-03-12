window.addEventListener("load",function(){

const track=document.querySelector(".scroll-track");

if(track){

let speed=3;

function autoScroll(){

track.scrollLeft+=speed;

if(track.scrollLeft>=track.scrollWidth/2){
track.scrollLeft=0;
}

}

setInterval(autoScroll,20);

}

});
