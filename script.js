const track=document.querySelector(".scroll-track");

let speed=2;

function autoScroll(){

track.scrollLeft+=speed;

if(track.scrollLeft>=track.scrollWidth/2){

track.scrollLeft=0;

}

}

setInterval(autoScroll,5);
